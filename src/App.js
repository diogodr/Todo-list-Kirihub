import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TasksContextProvider } from "./hooks/useTask";
import './styles/global.scss'

function App() {
  return (
    <TasksContextProvider>
      <Header />
      <TaskList />
    </TasksContextProvider>
  );
}

export default App;
