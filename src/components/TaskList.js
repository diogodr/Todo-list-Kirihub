import { useContext, useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import { TasksContext } from '../hooks/useTask';


export function TaskList() {
  const [tasks, setTasks] = useContext(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks(tasks => [...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id) {
    const checkedTask = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    setTasks(checkedTask);
  }

  function handleRemoveTask(id) {
    const filteredIdTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredIdTasks);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16} color="#1C1C29" />
              </button>
            </li>
          ))}

        </ul>
      </main>
    </section>
  )
}