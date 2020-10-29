import React ,{useState, memo, useCallback, useMemo} from 'react'

function Counter(){
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jock')

  // memo 和 userMemo 配合使用类似 componentShouldUpdate，减少不不要的渲染
  // useMemo useCallback 处理，只有在count更新的时候更新，保证在其他props(text)改变时不会变，使渲染优化成为可能
  const config = useMemo(() => ({
    text: `count is ${count}`,
    color: count > 3 ? 'red': 'blue'
  }), [count])

  const handleButtonClick = useCallback(() => setCount(count + 1), [count])

  return(
    <div>
      <input type = 'text' value= {name} onChange = {(e)=>setName(e.target.value)}/>
      <Child onButtonClick={handleButtonClick} config = {config}></Child>
    </div>
  )
}

const Child = memo(function Child({onButtonClick, config}){
  console.log('child')
  return (
    <button onClick={onButtonClick} style={{color: config.color}}>
      {config.text}click button
    </button>
  )
})

export default Counter