import React, { useState, useRef } from 'react'

export default function  ClosureDemo() {
  const [count, setCount]=  useState(0)

  const countRef = useRef()
  countRef.current = count
  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleAlert = () => {
    console.log('??');
    
    setTimeout(() => {
      // 通过useRef 取到的 countRef 是整个对象，保存的是最新的值，可以规避闭包陷阱
      // 否则 ，直接打印count是闭包的值
      alert(countRef.current)
    }, 2000)
  }
  
  return(
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleAlert}>alert</button>
    </div>
  )
}
