import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "../style.css"

function MoviesContainer(props) {

  const [styles,setStyle] = useState({style : "btn btn-warning" , Message : "Add to Watch List" });

  const {style,Message} = styles;
  
  return    (   <div className = "MoviesContainer col-md-3 mb-5">
           <div className="card card-body bg-dark text-center h-100">
        <img className="w-60 mb-2" src = {`${props.item.Poster}`}   />
        <p className="text-light card-title">  Tiltle : {props.item.Title}  </p>
        <p className="text-light card-title">  Type : {props.item.Type}  </p>
        {props.item.Runtime  && ( 
          <React.Fragment>
        <p className="text-light card-title">  Run Time  : {props.item.Runtime}  </p>
        <p className="text-light card-title"> Genre  : {props.item.Genre}  </p>
        <p className="text-light card-title"> Released  : {props.item.Released}  </p>
        
        </React.Fragment>
        )         
        }
      { !props.watchlist ?  <Link className = {style} onClick = { () =>    props.isLoggedIn === false || props.isLoggedIn === null ? alert("Sign in to add it in your wish list") :
       <div> {setStyle({style : "btn btn-success",Message : "Added to Watch List"})}  {props.storingInWishState(props.item)}  </div>    }  > {Message} </Link >  : 
      <Link  onClick = { () => { props.removeFromWatchList(props.i)    }  }  className = "btn btn-danger"> Remove from watch List  </Link>
      }
        <br></br>
        { !props.Runtime ? 
        <Link className="btn btn-primary"  to={`/movie/${props.item.imdbID}`} > More details <i className="fas fa-chevron-right" />  </Link> :
        <Link className="btn btn-success"  to="/" > Home Page   </Link>
        }
        </div>
    </div> )

}

export default MoviesContainer
