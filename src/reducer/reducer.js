const state = {

    movieName : "",
    movies : [] ,
    movieDetails : [],
    loading : "",
    wishList : []

}

 const reducer = (storeState = state  , actions  ) => {

    if(actions.type === "Movies"){
        return {
            ...storeState,
            movies : actions.payload,
            loading : false
        }

    }

    if(actions.type === "loading"){
        return {
            ...storeState,
            loading : true
        }
    }

    if(actions.type === "null"){
        return {
            ...storeState,
            loading : null
        }
    }

    if(actions.type === "clear_Movie"){
        return {
            ...storeState,
            movieDetails : [],
            loading : false
        }

    }

    if(actions.type === "clear_Movies"){
 
        return {
            ...storeState,
            movies : [] 
        }

    }

    if(actions.type === "SingleMovie"){
        return{
            ...storeState,
            movieDetails : actions.payload,
            loading : false
        }
    }
    if(actions.type === "movieName"){
        return {
            ...storeState,
            movieName : actions.payload
        }

    }

    if(actions.type === "remove"){
        const take = actions.payload;
        const sState = [...storeState.wishList]
       const removedWish =  sState.filter( (item,i) =>  { return i !== take  } );
       return {
           ...storeState,
           wishList : removedWish
       } 

    }

    if(actions.type === "watchList"){

        let take = actions.payload

        let newList = [...storeState.wishList]

        const title = take.Title;
        
     const final =   newList.find(  item =>  item.Title === take.Title );
        
        if(final === undefined){
       newList.push(take)
        }
        

        take = ""
        
        return {
            ...storeState,
            wishList : newList
        }

    }

    return storeState;

}


export default reducer;