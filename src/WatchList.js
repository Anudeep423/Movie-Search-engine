import {React,useEffect} from 'react'
import {connect} from "react-redux"
import MoviesContainer from "./MoviesContainer/MoviesContainer"
import {removeWishAction} from "./actions.js/actions"

const WatchList = (props)  => {

    let list = []

      console.log("called in watchlist")

        useEffect(() => {
            
            list = props.wishList;

            console.log("called in useeffect", props);
            
        }, [])

        const removeFromWatchList = (index) => {
                
            props.removeWishAction(index);
        }
    
    return (
    
        <div className="row">

        {props.wishList.map( (item,i) => { return <MoviesContainer item={item} i = {i} removeFromWatchList={removeFromWatchList} 
        
        watchlist = {"wer"}   />  }   )} 
        

        </div>
    )
}

const mapStateToProps = (state) => {

    return state

}

export default connect(mapStateToProps,{removeWishAction})(WatchList)
