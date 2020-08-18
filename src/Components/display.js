import React from 'react'
import './display.css'
const Display = props =>{

    return(
        <div className="display">
            <h3>{ props.value }</h3>
        </div>
    )
}
export default Display