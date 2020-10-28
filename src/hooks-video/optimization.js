import React ,{useState, Children} from 'react'

function Counter(){
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jock')

  const config = {
    text: `count is ${count}`,
    color: count > 3 ? 'red': 'blue'
  }

  const handleButtonClick = () => setCount(count + 1)

  return(
    <div>
      <input type = 'text' value= {name} onChange = {(e)=>setName(e.target.value)}/>
      <Child onButtonClick={handleButtonClick} config = {config}></Child>
    </div>
  )
}

function Child({onButtonClick, config}){
  console.log('child')
  return (
    <button onClick={onButtonClick} style={{color: config.color}}>
      {config.text}
    </button>
  )
}