import React from 'react';
import Calculator from './lifting-state-up';
import Lift from './lifting-state-up';
import MyComponentRef from './refs'
// import {CommentList, BlogPost} from './hoc'
import {CommentList, BlogPost, CommentListWithSubscription, BlogPostWithSubscription} from './hoc_2'
import {BlueDatePicker, YourComponent} from './practice'
import Example from './hooks'
import Parent from './hooks-video/ref-demo.js'
import Hooks from './hooks-video/hooks'
import EffectTimeDemo from './hooks-video/effect-time-demo'
import Counter from './hooks-video/optimization'
import ClosureDemo from './hooks-video/closure'

// import logo from './logo.svg';
import './App.css';
import getAreaData from './getAreaData';

class CounterButton extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={count: 1}
  }
  render(){
    return (
      <button
        color = {this.props.color}
        onClick={()=> this.setState(state=>({count: state.count + 1}))}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

function MyComponent(props) {
  //  let ComponentThis = 'NiuPee'
   props = {name: 'Dave', lastName: 'li'}
    return <div {...props}>
    </div>
  }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.onSelected = this.onSelected.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.props.color!== nextProps.color){
  //     return true
  //   }
  //   if(this.state.count !== nextState.count){
  //     return true
  //   }
  //   return false
  // }




  renderMyComponent(){
    return(
      <MyComponent/>
    )
  }

  onSelected(id){
    console.log('idd', id);
    
    this.setState({
      selectedId: id
    })
  }

render() {
// let res =  getAreaData()
// console.log('res', res);
// console.log('CommentListWithSubscriptiontype 1', typeof BlogPostWithSubscription.function1);
// console.log('CommentListWithSubscriptiontype 2', typeof BlogPostWithSubscription.function2);

  return (
    <div className="App" style={{padding: '20 10'}}>
      <header className="App-header" style={{justifyContent: 'flex-start'}}>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* {this.renderMyComponent()} */}
        {/* <Lift></Lift>
        <MyComponentRef></MyComponentRef>
        <BlueDatePicker></BlueDatePicker>
        <YourComponent></YourComponent> */}

        {/* <CommentList onSelected={this.onSelected}></CommentList>
        <BlogPost id={this.state.selectedId}></BlogPost> */}

        {/* <CommentListWithSubscription onSelected={this.onSelected}></CommentListWithSubscription>
        <BlogPostWithSubscription id={this.state.selectedId}></BlogPostWithSubscription>
        <Example></Example> */}
        <Parent></Parent>
        {/* <Hooks></Hooks> */}
        <EffectTimeDemo></EffectTimeDemo>
        <Counter></Counter>
        <ClosureDemo></ClosureDemo>
      </header>
    </div>
  );
}

}
  



export default App;
