import React,{useState,useEffect} from 'react'
import {connect} from "react-redux"
import {call_movies, movie_Name,setLoading,clear_It, singleMovie,sendingToWishList} from "../actions.js/actions"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import Spinner from "../spinner";
import SingleMovie from "../MoviesContainer/SingleMovie"


  
const Home = (props)  =>{

    const [wishMovies,SetwishMovies] = useState("")
    

    useEffect( () => {

        console.log(!props.loading  ? "true" : "false" )
        // props.clear_It("clear_Movies")
        return () => {
            console.log("called in clear movies")
            // props.clear_It("clear_Movies")  
        }
        
    } , [])

    const storingInWishState = (data) => {

        console.log(data);

        props.sendingToWishList(data)

    }


    const calling_movies = (text) => {
        props.setLoading()
        props.call_movies(text);
        
      
        
       
    }

    const handleValue = (e) => {

       
        props.movie_Name(e.target.value)

    }

    
    return (
        <div>
          
            {/* { props.isLoggedIn && 
            <h1>Welcome  {props.email}  </h1>
} */}
          

            <div className="conatiner">
               <div className="p-6">
           <input
              
              type="text"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={handleValue}
            />
            <button onClick = { () =>   {  calling_movies(props.movieName) }} type="submit" className="btn btn-primary btn-bg ">
              Search
            </button>
            </div>
            </div>

            <div className="row">

            {  props.loading === false  && ( 
              
                props.movies.Search.map( item =>                        
                <MoviesContainer storingInWishState={storingInWishState} isLoggedIn = {props.isLoggedIn} item = {item} /> 
               
                
                ) ) }
                {props.loading === true ? (
                    <div>
                     <Spinner />

                     </div>
                ) : ""
                }
                </div>
                
                
        </div>
    )
}

const mapStateToProps = (state) => {

        return state 

}


export default connect(mapStateToProps,{call_movies, movie_Name,clear_It,setLoading,sendingToWishList   })(Home)

