// beside react document ,thereis sth from hooks-video
import React, {useState, useEffect, useContext, createContext, useRef, userReducer, useReducer, Component} from 'react'


const Context = createContext('')

function textReducer(state, action){
  switch(action.type){
    case 'UPDATE':
      return action.value
      default: 
      return state
  }
}

function Hooks(){
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
    const interval = 
    setInterval(()=>{
      console.log('ref', ref);
      
      // ref.current.style.color = 'red'
      setCount(count+1)
    }, 1000)
    return ()=>{
      console.log('unload')
      clearInterval(interval)
    }
  }, [count])


  return(
    <Context.Provider value={{ name: 'jock', age: 18}}>
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
      <Child></Child>
    </Context.Provider>
  )
}

function Child(){
  const context = useContext(Context)
  return <div>{context.name}</div>

}

// class Child extends Component{
//   static contextType = Context

//   render() {
//     return <div>{this.context}</div>
//   }
// }

export default Hooks