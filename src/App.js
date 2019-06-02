import React from 'react';
import logo from './network.svg';
import './App.css';

function App() {
const [fact, setFact] = React.useState('');
React.useEffect(() => {
  fetch('http://localhost:7071/api/app')
  .then(raw => raw.json())
  .then(res => {
setFact(res.text);
})
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cat:  <code>{fact}</code> 
        </p>
        <a
          className="App-link"
          href="http://localhost:5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
