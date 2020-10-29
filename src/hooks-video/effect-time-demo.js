import React, {useEffect, useLayoutEffect, useState} from 'react'
const colors = ['red', 'black', 'yellow']

export default function EffectTimeDemo(){
  const [num, setNum] = useState(0)

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setNum(c => c === 2?0: c+1)
  //   }, 1000)
  // }, [])

  useEffect(()=>{
    // alert(num)
  })

  // 和 componentDidMount 类似
  // useLayoutEffect(()=>{
  //   alert(num)
  // })

  return <div style={{ background:  colors[num]}}>Look</div>
}