import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch(process.env.REACT_APP_BACKEND_API + "/quotes/random")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the JSON data here
        setQuote(data.text)
        return data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
        <button onClick={getQuote}>Get a random quote!</button>
        <h2>{quote}</h2>    
      </header>
    </div>
  );
}

export default App;
