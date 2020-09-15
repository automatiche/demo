import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  focusTextInput(){
    const te = this.textInput.current
    console.log('--te in', te)
    // te.focusTextInput()
    te.focus()
  }
  
  render(){
    return(
      <div>
        <input
          type='text'
          ref={this.textInput} />
        <input
          type='button'
          value='focus the text input'
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

// refs转发到子级组件
const FancyButton = React.forwardRef((props, ref)=>{

  return(
    <button ref={ref} className= 'FancyButton' onClick={props.handelClick}>
      {props.children}
    </button>
  )
  
})

class MyComponentRef extends React.Component{
  constructor(props){
    super(props)
    this.textInput = React.createRef()
    // this.focusTextInput = this.focusTextInput.bind(this)

    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.fancyRef = React.createRef()
    this.handelClick = this.handelClick.bind(this)
  }

//  componentDidMount(){
//    console.log('his.textInput.current', this.textInput.current);
   
//    this.textInput.current.focusTextInput()
//  }

 handelClick(e){
   console.log('this.fancyRef.current', this.fancyRef);
   this.fancyRef.current.className = 'FancyButton_new'
 }
  render(){
    return(
      <div>
        {/* <CustomTextInput
          type='text'
          ref={this.textInput} /> */}
        {/* <input
          type='text'
          ref={this.textInput} /> */}
        {/* <input
          type='button'
          value='focus the text input'
          onClick={this.focusTextInput}
        /> */}
        <FancyButton ref={this.fancyRef} handelClick={this.handelClick}>Click me!</FancyButton>
      </div>
    )
  }
}

export default MyComponentRef