import React from 'react';
import logo from './logo.svg';
import './App.css';
import getAreaData from './getAreaData';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

render() {
let res =  getAreaData()
console.log('res', res);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          document
        </a>
      </header>
    </div>
  );
}

}
  



export default App;
