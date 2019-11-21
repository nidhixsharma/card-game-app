import React from 'react'

const AddNumbers=(props)=>{
    return (
        <div>
            <div className="flexContainer">    
        <span className="number1">{props.num1}</span>
        <span className="operator" > + </span>
        <span className="number2">{props.num2}</span>       
        <span className="operator" > = </span>
        </div>
             
        </div>
    )
}

export default AddNumbers;