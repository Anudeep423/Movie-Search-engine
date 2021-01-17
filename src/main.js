import React from 'react'
import {connect} from "react-redux"
import Home from "./core.js/home"

function Main(props) {

    const home = (
        <Home />
    )
    return (
        <div>
            { props.loading  ?      <p> fwafw  </p>   : {home}    }
        </div>
    )
}

const mapStateToProps = (state) => {

    return state

}

export default connect(mapStateToProps)(Main)
