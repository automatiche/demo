import areaSource from './areaSource/index.js';

let {provinces, cities, areas, streets} = areaSource
let areaSourceArr = [provinces, cities, areas, streets]

  /**
 * 
 * target format
 * [
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
function appendToParent(parent, children){
   let res = Object.assign({}, {value: parent.name, label: parent.name})
   children ? res = Object.assign({}, res, {children}) : null
   return res
}

/* 处理每层数据，返回children数组 */
function getAreaData( parentItem, index=0){
  let children = []
  let self = this

  for(let i of areaSourceArr[index]){
    if((parentItem && i.parent_code === parentItem.code) || !parentItem){
        /* 最终层 街道*/
        if(index == 3){
          i = appendToParent(i)
          children.push(i)
        }else{ /* 修改每一个对象，然后push到当前层的children数组 */
          i = appendToParent(i, getAreaData(i, index+1))
          children.push(i)
        }
    }
  }
  return children
}

/* 回调方式 */
function areaSourceHandler(){
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
                                      q = appendToParent(q)
                                      children2.push(q)
                                    }
                                  }
                                  )(q)
                                }
                                /* 3-------------3 */
                              j = appendToParent(j, children2)
                              children1.push(j)
                            }
                          }
                          )(j)
                          /* 2----------------2 */
                        }
                    // children1  市数组
                    province = appendToParent(i, children1)
                    children.push(province)
                  }
                }
                )(province)
          }
      }

      province = appendToParent(province, children)
      resultData.push(province)
      console.log('province res', province);
      console.log('resultData res', resultData);
    }
  }
}

export default getAreaData
  



