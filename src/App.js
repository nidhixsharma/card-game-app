import React,{Component} from 'react';

import Result from './components/RandomNumber/Result/Result'

import './App.css';

class App extends Component {
  state={
    num1:"",
    num2:"",
    sum:"",
    message:"",
    answer:"",
    correct:true
  }

  componentDidMount(){
    let firstNumber = Math.floor(Math.random() * 10)
    let secondNumber = Math.floor(Math.random() * 10)
    this.setState({
      num1 : firstNumber,
      num2 : secondNumber
    })
  }


    onChangeHandler=(event)=>{
      this.setState({
        [event.target.name] : event.target.value
      })     
     
    }

    clickHandler=(a,b,value)=>{    
      let c= a+b 
      if(value==c){
        this.setState({
          message:"Superb! you got it."
        })
      }
      else{
        this.setState({
          message:"OOps!This is inCorrect.",
          answer: c,
          correct:false
        })
      }
    }

    refreshPage=()=>{
      window.location.reload(false);
    }

  render(){
    let incorrectMessage =(<h3>{this.state.message} <br/> The correct answer is {this.state.answer}.</h3>)
  return (
    <div className="App">
       <h2>React Card App</h2>
       <div className="flexContainer">
       {/* <RandomNumber /> */}
       {this.state.num1}
       <span > + </span>
       {this.state.num2}
       {/* <RandomNumber /> */}
       <span > = </span>
       <Result change={this.onChangeHandler}
               click={()=>{this.clickHandler(this.state.num1,this.state.num2,this.state.sum)}}
               />       
       </div>    
        {this.state.correct ?  <h3>{this.state.message} </h3>: <h3>{incorrectMessage} </h3>}
      
      <button  onClick={this.refreshPage}>NEXT</button> 
           </div>
  );
}
}

export default App;
