import React from 'react'
import {Link} from "react-router-dom"
// styling navbar
function Navbar(props) {
    return (
        <div>
          {props.isLoggedIn  ?    <h1> Welcome {props.name}    </h1> : <h1>Welcome guest</h1> }
      <nav className="navbar navbar-light bg-dark ">
        <div className="container-fluid">
          <div className="navbar-header ">
            <React.Fragment  className = "">
            <Link className="btn btn-info" to="/">
              Home
            </Link>
            </React.Fragment>
         
            {             
             !props.isLoggedIn ?  
             <Link className="btn btn-success mx-2" to="/login">
               Login
             </Link> : (   
               <React.Fragment>
                 <Link to="/movies/watchList"  className="btn bg-warning mx-2" >
               Watch List       
            </Link>
               <Link onClick = { () => {props.logout()}  }  className="btn bg-secondary mx-1" >
               Logout       
            </Link>
            
 </React.Fragment> )
 }
            

          
     
            


</div> 

          </div>
         
        
      </nav>
    </div>
    )
}

export default Navbar
