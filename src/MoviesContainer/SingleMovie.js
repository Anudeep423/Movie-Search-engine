import React,{useEffect,useState} from 'react'
import axios from "axios"
import {connect} from "react-redux"
import {singleMovie,clear_It,setLoading,setLoadingNull,sendingToWishList} from "../actions.js/actions"
import MoviesContainer from './MoviesContainer'
import SingleMovieContainer from "./SingleMovieContainer"
import Spinner from "../spinner";

const  SingleMovie =(props) => {

        useEffect( () => {
            props.setLoading();
            props.singleMovie(props.match.params.id);
           

            return () =>{
               
                props.clear_It("clear_Movie")
               
            }

        } , [] )

        const storingInWishState = (data) => {

            console.log(data);
    
            props.sendingToWishList(data)
    
        }
        
        const {Title,Type,Poster,Runtime,Genre,Writer,Actors,Released,imdbID,Rated,Director,imdbRating} = props.movieDetails

    return (
        <div>
            {props.loading  ?  <Spinner /> : <SingleMovieContainer  Title = {Title}  Type = {Type} Poster = {Poster} imdbID = {imdbID}
             Runtime = {Runtime} Genre = {Genre}  Writer ={Writer}  Actors = {Actors} isLoggedIn = {props.isLoggedIn}
              Released = {Released} Rated = {Rated}  storingInWishState = {storingInWishState} Director = {Director} imdbRating = {imdbRating} item = {props.movieDetails} /> }
            {/* {!props.laoding ?     : "" } */}
        </div>
    )
}

const mapStateToProps = (state) => {

    return state
}

export default connect(mapStateToProps,{singleMovie,clear_It,setLoading,setLoadingNull,sendingToWishList})(SingleMovie)