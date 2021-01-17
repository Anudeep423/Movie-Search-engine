import axios from "axios"

export const call_movies = (text) =>  dispatch => {

    axios.get(`https://www.omdbapi.com/?apikey=c951ff1&s=${text}`)
    .then(res => {
        dispatch({
            type : "Movies",
            payload : res.data,
            
        })
    }   )

}

export const setLoadingNull = () => dispatch => {
    dispatch({ type : "null"  })
}


export const setLoading = () => dispatch => {
    dispatch({ type : "loading"  })
}

export const singleMovie = (text) => dispatch => {
    console.log("called in actions")
    axios.get(`https://www.omdbapi.com/?apikey=c951ff1&i=${text}`)
    .then(res => {     
        dispatch({
            type : "SingleMovie",
            payload : res.data
        })
    }   )

}


export const movie_Name = (Name) => dispatch => {

    dispatch({ type : "movieName" , payload : Name  })


}

export const clear_It = (text) => dispatch => {

    dispatch({type : text  })

}


export const sendingToWishList = (data) => dispatch =>   {

    dispatch({ type : "watchList" , payload : data  })

}

export const removeWishAction = (index) => dispatch => {

    dispatch({type: "remove" , payload : index  })

}