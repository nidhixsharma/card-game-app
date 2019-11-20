import React from 'react'

import './Result.css'

const Result =(props)=>{
   return( 
   <div>
      <div >
        <input className="inputBox" type= "text" value={props.result} autofocus="true" placeholder="" name="sum"  onChange={props.change}/>
        </div>
        <div>
           <button  onClick={props.click}>SUBMIT</button>
         
        </div>
        </div>
   
   )
}

export default Result;