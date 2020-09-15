// jsx
import React from 'react'

// 点语法
const MyComponents = {
  DatePicker: function(props){
    return (
      <div>datepicker its {props.color}</div>
    )
  }
}

// 自定义组件方法名大写
function Hello(props){
  return <div>hello {props.name}
  </div>
}

function HelloWord(){
  return <Hello name='&lt;3'></Hello>
}


// 变量名大写
function Photo(props){
  let ComponentName = components[props.name]
  return <ComponentName></ComponentName>
}

const components = {
  photo: PhotoStory,
};

function PhotoStory(props){
  return <div>PhoneStory</div>
}

function Greeting(props){
  return <fieldset>
    <legend>Greeting: </legend>
    {props.firstName + ' ' +  props.lastName}
  </fieldset>
}

// ...属性展开
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

function FilterComponent(props) {
  const {link, ...rest} = props
  return <Greeting firstName={link} {...rest} />;
}

// props.children  ; return []
function JSXCOMPONENT(props) {
  console.log('propsss', props)
  console.log('propsss children', props.children)
  return [
    <div>
    {props.children}
  </div>,
  <div>
  {props.children}
</div>
  ]
}

// props.children 传入回调函数返回组件
function Repeat(props){
  let items = []
  for(let i=0; i<props.times; i++){
    items.push(props.children(i))
  }
  return(
    <div>
      {items}
    </div>
  )
}

function ListChildren(){
  return (
    <Repeat times={5}>
      {(index)=><li key={index}>{index}</li>}
    </Repeat>
  )
}

class YourComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div>
        your component
        {/* <Hello></Hello>
        ------
        <HelloWord></HelloWord>
        <Photo name='photo'></Photo>
        ------
        <App1></App1>
        <App2></App2> */}
        <FilterComponent link="link" lastName='lastNamename' rest='somerest' onClick={()=> console.log('clicked!')}>
          Filter Component
        </FilterComponent>
        <JSXCOMPONENT>
          {'Hello   jsx'}
        </JSXCOMPONENT>
        <ListChildren></ListChildren>
      </div>
    )
  }
}

function BlueDatePicker(){
  return <MyComponents.DatePicker color='blue'></MyComponents.DatePicker>
}

export  {BlueDatePicker, YourComponent}