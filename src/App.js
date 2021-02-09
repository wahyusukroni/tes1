import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react'; 
import { useState } from 'react';
// import Hello from 'hello';

const App = () => {
  const [date, setDate] = useState({

  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <React/>  
        <h1>TWINS COLLECTION</h1>
        <p>Menyediakan :</p>
        <ul>
          <li>Baju</li>
          <li>Jacket</li>
          <li>Celana</li>
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Tutorial Reactjs untuk Pemula</h1>
      <h2>Panduan step-by-step belajar Reactjs</h2>
    </div>
  );
}

//ES6
// Hello = () => {
//   return "WELCOME HOME!";
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>SELAMAT DATANG!</h1>
        <h2>SEKARANG JAM {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
