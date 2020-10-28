// beside react document ,thereis sth from hooks-video
import React, {useState, useEffect, createContext, useRef, userReducer, useReducer} from 'react'


const Context = createContext('')

function textReducer(state, action){
  switch(action.type){
    case 'UPDATE':
      return action.value
      default: 
      return state
  }
}

function Example(){
  const [count, setCount] = useState(0)
  // const [text, setText] = useState(0)
  const ref = useRef()

  const [text, dispacthText] = useReducer(textReducer, '')

  const handleChange = (e) => {
    // setText(e.target.value)
    dispacthText({
      type: 'UPDATE',
      value: e.target.value
    })
  }

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
    setTimeout(()=>{
      console.log('ref', ref);
      
      ref.current.style.color = 'red'
    }, 1000)
  })


  return(
    <div>
      <p>You clicked {count} times</p>
      <p ref={ref}>i'm ref</p>
      <button onClick={() => setCount(count + 1)}>
        click
      </button>
      <p>You clicked {text} times</p>
      <p ref={ref}>i'm ref</p>
      <input onChange={handleChange} value={text}/>
      ---------
    </div>
  )
}

export default Example