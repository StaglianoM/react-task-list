import './App.css'


function Header() {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '5px', textAlign: 'left' }}>
      <h1>Task Manager</h1>
    </div>
  );
}

function Main() {
  return (

    <div style={{ marginTop: '20px' }}>
      <h3 style={{ fontSize: '20px' }}>Current Tasks (4)</h3>
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

