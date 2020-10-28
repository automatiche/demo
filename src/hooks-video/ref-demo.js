import React, {
  createRef, 
  useImperativeHandle,
  forwardRef
} from 'react'

// class ClassChild extends React.Component{
//   alert(){
//     alert('this.is class child')

//   }
//   render(){
//     return <span>this is class child</span>
//   }
// }

function FunctionChild(props, ref){

  useImperativeHandle(ref, ()=>({
    alert(){
      alert('this is function compnent')
    }
  }))
  return <span>function child</span>
}

const ForwardFunctionChild = forwardRef(FunctionChild)

class Parent extends React.Component{
  constructor(){
    super()
    this.ref = createRef()
  }
  componentDidMount(){
    console.log('did this.ref.current', this.ref.current);
    console.log('did this.ref.', this.ref);
    
    // this.ref.current.alert()
  }
  render(){
    // return <ClassChild ref={this.ref} />
    return <ForwardFunctionChild ref={this.ref} />
  }
}


export default Parent