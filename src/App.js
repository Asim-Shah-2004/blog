import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange = () =>{
    const names = ['asim','abcd','xyz'];
    const ran = Math.floor(Math.random()*3)
    return names[ran]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}</p>
      </header>
    </div>
  );
}

export default App;
