import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "новое изменение";

  const vers = "Its 1.0.1 version"

  const onClick = () => {
    console.log("hello world")
  }


  return (
    <div className="App">
     <header className="App-header">
         {greeting}
      </header>
      <p>helloooo</p>
       <div>{vers}</div>
       <button onClick={onClick}></button>
    </div>
   
  );
}

export default App;
