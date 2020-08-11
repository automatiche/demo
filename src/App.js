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
  componentDidMount(){
  let {provinces, cities, areas, streets} = areaSource
  // this.areaSourceHandler()
  // this.gotoHandel()
  
  }

  /**
 * 
 * 
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
/* 添加children, 同时加上value和label属性 */
 appendToParent(parent, children){
   console.log('append parent', parent);
   console.log('append children', children);
   let res = Object.assign({}, parent, {value: parent.name, label: parent.name})
   children ? res = Object.assign({}, res, {children}) : null
   return res
}

gotoHandel( parentItem, index=0){
  let children = []
  let self = this
  if(index == 4){
    console.log('resssss', children);
    return children
  }
  for(let i of areaSourceArr[index]){
    (function(i){
      // console.log('areaSourceArr[index] ', areaSourceArr[index]);
      // console.log('parentItem ', parentItem);

      if((parentItem && i.parent_code === parentItem.code) || !parentItem){
          /* 最终 街道*/
          if(index == 3){

            // i = self.appendToParent(i)
            i = self.appendToParent(i)
            children.push(i)
            console.log('children 333', children);

            // self.appendToParent(parentItem, i)

          }else{
            i = self.appendToParent(i, self.gotoHandel(i, +index+1))
            children.push(i)
          }
      }

    }
    )(i)
  }
  // if(){
  //   i = self.appendToParent(i, self.gotoHandel(i, index+1))
  //   children.push(i)
  // }

  return children
}

/* 有限方法 */

callback(q, j, children){
  let self = this
  if(q.parent_code === j.code){
    q = self.appendToParent(q)
    children.push(q)
  }
}

// callback(item, parentItem, children, callback){
//     (function(item){
//       console.log('children 123', children);
      
//       if(item.parent_code === parentItem.code){
//           for(let q of streets){
//             /* 最终 街道*/
//             if(item.code.length == 9){
//               q = self.appendToParent(q)
//               children.push(q)
//             }else{
//               q = self.appendToParent(q, this.callback(q))
//               children.push(q)
//             }
//           }
//         item = self.appendToParent(item, children2)
//         children.push(item)

//       }

//     }
//     )(item)
// }

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
  // provinces.map(province => {
    
    
  // })
}

render() {
let res =  this.gotoHandel()
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
