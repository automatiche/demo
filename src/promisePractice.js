// TODO promise all; 异步实行，只是返回结果按顺序返回；
// 每次promise任务内，又有promise 和 promise all 
import React from 'react'

function firstSendConsultDetailToDoctor() {
  const detail = this.props.consultDetail || {};
  // let initInquiryMsg = prescriptionInfo
  // let initInquiryMsg = {
  //   content: detail.content,
  //   inquirySheet: detail.inquirySheet,
  //   images: detail.images
  // }
  // initInquiryMsg = JSON.stringify(initInquiryMsg)
  // await this.sendPrivateText(
  //   initInquiryMsg, 'text', '21'
  // );
  const images = [
    1500,
    500,
    1000
  ]
//     const images = [
//  "http://qiniu-founder-bdyl.uthealth.com.cn/1600764286720",

//  "http://qiniu-founder-bdyl.uthealth.com.cn/1600764227681",

//       "http://qiniu-founder-bdyl.uthealth.com.cn/1600764262927",
//     ]
  // if (images && images.length) {
  // const promises = images.map((image) => {
  //      this.testFun(image)
  //   })
  if (images && images.length) {
  const promises = images.map( (image) => {
      return new Promise((resolve, reject) => {
        
        resolve(this.testFun(image))
      })
    })
    console.log('promisespromises', promises);
    console.log('promisespromisespromises.flat()', promises.flat());

    // return await Promise.all(promises.flat())
    return await Promise.all(promises)
    // let doTask = images.reduce((prev,next)=>prev.then(
    //   (next) => {
    //     return new Promise((resolve, reject) => {
          
    //       resolve(this.testFun(next))
    //     })
    //   }
    // ),Promise.resolve());
    // doTask.then(()=>console.log("all done."));

    // .then(function(res) {
    //     console.log('---promises', promises)
    //     console.log('---res', res)
    //     console.log('---res.flat()', res.flat())
    //   }
    // )
  }

  // if (detail.images && detail.images.length) {
  //   detail.images.map(async (image) => {
  //     await this.sendPrivateText(
  //       image, 'image'
  //     );
  //   })
  // }
  await this.setState({
    firstSendDetail: true
  });
}

function testFun(image){
  console.log('image', image);

  const fun1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('console 1image', image);
      resolve('fun1-------->' + image) 
    }, JSON.stringify(image));
  })

  console.log('image 2', image);
  const fun2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('console 2image', image);
      resolve('fun2------->>' + image) 
    }, JSON.stringify(image));
  })

  // Promise.all([fun1, fun2]).then((values)=>{
  //   console.log('fun3', values)
  //   // resolve('fun3', values)
  // })

  return new Promise(resolve=>resolve(
      resolve( [fun1, fun2])
  ))

  // return new Promise(resolve=>resolve(
  //   Promise.all([fun1, fun2]).then((values)=>{
  //     console.log('fun3', values)
  //     resolve(values)
  //   })
  // ))
}

class PromiseButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return <button onClick={()=>firstSendConsultDetailToDoctor()}></button>
  }
}

export { PromiseButton}
