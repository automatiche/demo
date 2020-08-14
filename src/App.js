import React from 'react';
import logo from './logo.svg';
import './App.css';
import areaSource from './areaSource/index.js';

let {provinces, cities, areas, streets} = areaSource
let areaSourceArr = [provinces, cities, areas, streets]

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  /**
 * 
 * const AreaData = [
    {
      value: '北京市',
      label: '北京市',
      children: [
        {
          value: '北京市',
          label: '北京市',
          children: [
            {
              value: '东城区',
              label: '东城区'
            },
            {
              value: '西城区',
              label: '西城区'
            },

 */

/* 给对象添加children, 同时加上value和label属性 */
 appendToParent(parent, children){
   let res = Object.assign({}, {value: parent.name, label: parent.name})
   children ? res = Object.assign({}, res, {children}) : null
   return res
}

/* 处理每层数据，返回children数组 */
gotoHandel( parentItem, index=0){
  let children = []
  let self = this

  for(let i of areaSourceArr[index]){
    if((parentItem && i.parent_code === parentItem.code) || !parentItem){
        /* 最终层 街道*/
        if(index == 3){
          i = self.appendToParent(i)
          children.push(i)
        }else{ /* 修改每一个对象，然后push到当前层的children数组 */
          i = self.appendToParent(i, self.gotoHandel(i, index+1))
          children.push(i)
        }
    }
  }
  return children
}


 areaSourceHandler(){
  let {provinces, cities, areas, streets} = areaSource
  let resultData = []

  for(let province of provinces){
    let self = this
    let children = []
    if(province.name == '北京市' || province.name == '天津市'){
        for(let i of cities){
          if(i.parent_code == '11' || i.parent_code == '12'){
                (function(province){
                  console.log('i', i);
                  console.log('province', province);
                  let children1 = []
                  if(i.parent_code === province.code){
                      /* 2 --------areas append to cities */
                      let children2 = []
                        for(let j of areas){
                          (function(j){
                            if(j.parent_code === i.code){
                              /* 3------ street append to areas */
                                for(let q of streets){
                                  (function(q){
                                    if(q.parent_code === j.code){
                                      q = self.appendToParent(q)
                                      children2.push(q)
                                    }
                                  }
                                  )(q)
                                }
                                /* 3-------------3 */
                              j = self.appendToParent(j, children2)
                              children1.push(j)
                            }
                          }
                          )(j)
                          /* 2----------------2 */
                        }
                    // children1  市数组
                    province = self.appendToParent(i, children1)
                    children.push(province)
                  }
                }
                )(province)
          }
      }

      province = self.appendToParent(province, children)
      resultData.push(province)
      console.log('province res', province);
      console.log('resultData res', resultData);
    }
  }
}

render() {
let res =  this.gotoHandel()
console.log('res', res);
// this.areaSourceHandler()

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
