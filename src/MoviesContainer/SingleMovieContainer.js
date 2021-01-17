import React,{useState} from 'react'
import {Link} from "react-router-dom"

function SingleMovieContainer(props) {


  const [styles,setStyle] = useState({style : "btn btn-warning mx-3" , Message : "Add to Watch List" });

  const {style,Message} = styles;


    return (
        <div>

<div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={props.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{props.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {props.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {props.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {props.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {props.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {props.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {props.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {props.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {props.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + props.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link className = {style} onClick = { () =>    props.isLoggedIn === false || props.isLoggedIn === null ? alert("Sign in to add it in your wish list") :
       <div> {setStyle({style : "btn btn-success mx-3",Message : "Added to Watch List"})} {props.storingInWishState(props.item)}   </div>    }  > {Message} </Link >
              <Link to="/" className="btn btn-success  text-light">
               Home page
              </Link>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default SingleMovieContainer
