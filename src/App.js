import React,{Component} from 'react';

import Result from './components/RandomNumber/Result/Result'
import AddNumbers from './components/RandomNumber/AddNumbers/AddNumbers'
import './App.css';
class App extends Component {
  state={
    num1:"",
    num2:"",
    sum:"",
    message:"",
    answer:"",
    isCorrect:true,
    isRefresh:false
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
          message:"Superb! you got it.",   
          isCorrect:true    
        })

        window.location.reload(false);
      }
      else{
        this.setState({
          message:"OOps!This is inCorrect.",
          answer: c,
          isCorrect:false,
          isRefresh:true
        })
      }
    }

    refreshPage=()=>{
      window.location.reload(false);
     
    }

  render(){
    let correctMessage =(<h3>{this.state.message}</h3>)
    let incorrectMessage =(<h3>{this.state.message} <br/> The correct answer is {this.state.answer}.</h3>)
  return (
    <div className="App">   
     <h1>Card GameApp</h1>
      <AddNumbers num1={this.state.num1}
                  num2={this.state.num2}

                 />

       <Result change={this.onChangeHandler}
               click={()=>{this.clickHandler(this.state.num1,this.state.num2,this.state.sum)}}
               />   
                               
       {!this.state.isCorrect ?<h3>{incorrectMessage} </h3>:null}
       {this.state.isRefresh ?<button onClick ={this.refreshPage}>NEXT</button>:null}
       </div> 
        
        
           
         );
}
}

export default App;
