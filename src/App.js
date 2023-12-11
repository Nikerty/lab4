import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "новое изменение";
  return (
    <div className="App">
     <header className="App-header">
         {greeting}
      </header>
    </div>
  );
}

export default App;
