import React,{useState} from "react";
import { Provider } from "react-redux";
import { createStore,applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"
import reducer from "./reducer/reducer"
import Home from "./core.js/home"
import Signin from "./core.js/signin"
import { BrowserRouter as Router, Link, Switch, Route , Redirect, BrowserRouter} from "react-router-dom"
import SingleMovie from "./MoviesContainer/SingleMovie"
import Main from "./main"
import Navbar from "./navbar"
import WatchList from "./WatchList"
// app comoponent
const App = (props) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose ;
  const Store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

  const [values,setValues] = useState({
    email : "",
    password : "",
    isLoggedIn : null
})

const {email,password,isLoggedIn} = values

const handleChange = (name) => e => {

    setValues({...values,
    [name] : e.target.value
    })


}

const handleClick = () =>{
    if(email !== "" && password !== "" ){
    setValues({
        ...values,
        isLoggedIn : true
    })
   
}else{
    setValues({
        ...values,
        isLoggedIn : false
    })
}

console.log(values)
}

const logout = () => {
  setValues({
    email : "",
    password : "",
    isLoggedIn : false
  })
}

 
  return (

    

   
    <Provider store={Store}>
  
      <Router>


       {/* { !isLoggedIn  && <Link to = "/" > Sign in  </Link> }
        <Link to = "/home" > Home </Link>  */}
      
      <Navbar isLoggedIn = {isLoggedIn} name = {email} logout = {logout}/>



        
      <div>
          <Switch>
           
            {/* <Route exact path="/" render ={ () =>  {  if(isLoggedIn) { return <Home name = {email} isLoggedIn={isLoggedIn}/> } else { return <Redirect to ="/signin" />   }   }  } />
            <Route exact path ="/signin" render = { () => { if(isLoggedIn){ return  <Home  name = {email}/>   } return <Signin handleChange={handleChange}
             handleClick={handleClick}
             email = {email} 
             password = {password}
             values = {values}
             />  }  }  /> */}
              
             <Route exact path = "/" render ={ () => {  return <Home email = {email}  logout= {logout} isLoggedIn = {isLoggedIn}  />     }  }   />
             <Route exact path = "/login"  render = { () => { if(isLoggedIn){ return <Redirect to="/" /> } return <Signin  handleChange={handleChange}
             handleClick={handleClick}
             email = {email} 
             password = {password}
             values = {values}
             />   }   } />
            <Route exact path ="/movie/:id"    render = {  (props) => {  return <SingleMovie {...props} isLoggedIn = {isLoggedIn}  />     }  }            />
            <Route  exact path = "/movies/watchList" render = {  () => { return  <WatchList /> }  } />
          </Switch>
          </div>
      
      </Router>


    </Provider>

  );
}

export default App;
