import React from 'react'

const DataSource = {
  data: [
    {id: 1, text: 'text1', name: 'user1', Content: '由于我们已经记录了井字棋的历史记录，因此我们可以把这些记录以历史步骤列表的形式展示给玩家'},
    {id: 2, text: 'text2', name: 'user2', Content: '在前文中提到的 React 元素被视为 JavaScript 一等公民中的对象（first-class JavaScript objects），因此我们可以把 React 元素在应用程序中当作参数来传递。在 React 中，我们还可以使用 React 元素的数组来渲染多个元素。'},
    {id: 3, text: 'text3', name: 'user3', Content: '在 JavaScript 中，数组拥有 map() 方法，该方法通常用于把某数组映射为另一个数组，例如'}
  ],
  getComments: function(){
    return this.data
  },
  getBlogPost: function(id){
    return this.data.filter(item=>item.id===id)[0]
  },
  addChangeListener: function(callback){
    callback()
  }
}

class Comment extends React.Component{
  render(){
    const comment = this.props.comment
    return(
      <div onClick={()=>this.props.onSelected(comment.id)}>
        text: {comment.text}
        name: {comment.name}
      </div>
    )
  }
}

function TextBlock(props){
  console.log('text area', props);
  return(
    <fieldset>
      <legend>{props.text && props.text.text}</legend>
      <p>{props.text && props.text.Content}</p>
    </fieldset>
  )
}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} {...this.props}/>
        ))}
      </div>
    );
  }
}
 
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprps.this.props.id', nextProps.id);
    setTimeout(() => {
      DataSource.addChangeListener(this.handleChange);
    }, 100);
    // this.setState({
    //   id: nextProps.id
    // }, ()=>{
    //   DataSource.addChangeListener(this.handleChange);
    // })
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

export {CommentList, BlogPost}


// // 此函数接收一个组件...
// function withSubscription(WrappedComponent, selectData) {
//   // ...并返回另一个组件...
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         data: selectData(DataSource, props)
//       };
//     }

//     componentDidMount() {
//       // ...负责订阅相关的操作...
//       DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount() {
//       DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange() {
//       console.log('do callback handleChange');
      
//       this.setState({
//         data: selectData(DataSource, this.props)
//       });
//     }

//     render() {
//       // ... 并使用新数据渲染被包装的组件!
//       // 请注意，我们可能还会传递其他属性
//       const {exceptedProps, ...passThroughProps} = this.props
      
//       return <WrappedComponent data={this.state.data} exceptedProps={exceptedProps} {...passThroughProps} />;
//       // return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
//   };
// }