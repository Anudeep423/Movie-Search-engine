import React,{useState} from 'react'

function Signin(props) {

   
    
    return (
        
        <div>
           <p>Fill random details to Login</p>
          <input  placeholder = "Enter Name" onChange = {props.handleChange("email")}  value = {props.email}/>
          <br></br> <br/>
          <input type= "password"  placeholder = "Enter password"  onChange = {props.handleChange("password")} value = {props.password}  />
          <br></br> <br/>
          <button onClick  = { () => {props.handleClick()}  } > Submit  </button>
            <br></br>
            <br ></br>
          {JSON.stringify(props.values)} 

        </div>
    )
}

export default Signin
