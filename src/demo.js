// apply

Function.prototype.myApply = function(thisArg, params){
  var thisArgType= typeof thisArg
  if(thisArgType === 'number'){
    thisArg = new Number(thisArg)
  }
  else if(thisArgType === 'string'){
    thisArg = new String(thisArg)
  }
  else if(thisArgType === 'boolean'){
    thisArg = new Boolean(thisArg)
  }
  // thisArg 主语 传入的
  let thisTis = this
  let paramsInVoke = Array.isArray(params) ? params: []
  if(thisArg === null || thisArg === undefined){
    return thisTis(...paramsInVoke)
  }
  let uniquePropName = new Symbol(thisArg)
  return thisArg[thisTis](...paramsInVoke)
}

Function.prototype.myBind = function(){
  var boundTargetFunc = this
  if(typeof boundTargetFunc !== 'function'){
    return new Error('绑定的目标必须是函数')
  }
  var boundThis = arguments[0]
  var boundParams = [].slice.call(arguments, 1)
  function fBound(){
    var restParams = [].slice.call(arguments)
    var allParams = boundParams.concat(restParams)
    return boundTargetFunc.apply(this instanceof fBound ? this : boundThis, allParams)
  }
  fBound.prototype = Object.create(boundTargetFunc.prototype || Function.prototype)
  return fBound
}

// qiu最大值
function maxBy(arr, callback){
  let values = []
  if(typeof callback === 'string'){
    values = arr.map(item=>item.callback)
  }else if(typeof callback === 'function'){
    values = arr.map((item, index)=>{
      return callback(item, index, arr)
    })

  }
  let maxOne = Math.max(...values)
  let maxIndex = values.findIndex(item=>item=== maxOne)
  return arr[maxIndex]
}
const list = [
  {name: '小明', priority: 'middle'},
  {name: '小红', priority: 'low'},
  {name: '小李', priority: 'high'}
]

let callback = function(item){
  let key = item.priority === 'low' ? 1:item.priority === 'middle' ? 2:item.priority === 'high' ? 3:0
  return key
}
maxBy(list, callback)



// 参数定长的curry @
function curry(fn){
  const argLen = fn.length
  const presetArgs = [].slice.call(arguments, 1)

    return function(){
      const restParams = [].slice.call(arguments)
      const allParams = [...presetArgs, ...restParams]
      if(allParams.length >= argLen){
        return fn.apply(this, allParams)
      }
      else{
        return curry.call(null, fn, ...allParams)
      }
  }
}


// 参数不定长的curry @@
function curry(fn){
  const presetArgs = [].slice.call(arguments, 1)
  function curried (){
    let restParams = [].slice.call(arguments)
    let allParams = [...presetArgs, ...restParams]
    return curry.call(null, fn, ...allParams)
  }
  curried.toString = function() {
    return fn.apply(null, presetArgs)
  }
  return curried
}

let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function(arr){
   return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]



 arr = [[0, 1], [2, 3], [4,[5,6,7]]]
 newArr = function(arr){
   return arr.reduce((pre, cur)=>pre.concat(Array.isArray(cur)? newArr(cur): cur), [])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]


var result = [
  {
      subject: 'math',
      score: 10
  },
  {
      subject: 'chinese',
      score: 20
  },
  {
      subject: 'english',
      score: 30
  }
];

var sum = result.reduce(function(prev, cur) {
  return prev + cur.score
}, 0);
// console.log(sum) //60
var sum = 0
result.map(item=>{
  sum += item.score
})
console.log(sum)
