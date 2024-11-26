import './App.css'
import tasks from './data/tasks';

function Header() {
  return (
    <div className="navbar">
      <h1>Task Manager</h1>
    </div>
  );
}

function Main() {

  const filteredTasks = tasks.filter(task =>
    task.state === "backlog" || task.state === "in_progress"
  );

  const completedTask = tasks.filter(task =>
    task.state === "completed")



  const filter = (taskList) => {
    return (
      <ul>
        {taskList.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <span>{task.state} </span>

            <p>Priority: {task.priority}</p>
            <p>Estimated Time: {task.est_time}</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="container">
      <h3>Current Tasks ({filteredTasks.length})</h3>
      {filter(filteredTasks)}

      <hr />

      <h3>Completed Task ({completedTask.length})</h3>
      {filter(completedTask)}

    </div >
  )
}



function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

