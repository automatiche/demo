import React from 'react';
import logo from './logo.svg';
import './App.css';
import areaSource from './areaSource/index.js';

function appendToParent(item, children){
  Object.assign({}, [item], {value: [item].name, label: [item].name, children})
}

function areaSourceHandler(){
  let {provinces, cities, areas, streets} = areaSource
  console.log('provinces, cities, areas, streets', provinces, cities, areas, streets);
  let resultData = []
  provinces.map(province => {
      
    let self = this
    let children = []


    for(let i of cities){
      (function(province){
      console.log('i', i);
      console.log('self', self);
      console.log('self', self);
      console.log('province', province);
      
      if(i.parent_code === province.code){
        children.push(i)
        // children = appendToParent(i, children)

        province = appendToParent(province, children)
        // province = Object.assign({}, province, {value: province.name, label: province.name, children})
      }
    }
    )(province)
    // province = appendToParent(province, children)
    // province = Object.assign({}, province, {value: province.name, label: province.name, children})
    console.log('province res', province);
  }
})
  
}
function App() {
  areaSourceHandler()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;
