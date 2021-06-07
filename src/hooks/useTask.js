import React, { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('@tasks')) || []);

  useEffect(() => {
    window.localStorage.setItem('@tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  );
};