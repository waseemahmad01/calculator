import React from 'react'
import './button.css'

const isOperator = val =>{
    return !isNaN(val) || val === '.' || val === '='
}

const ShiftFunction = val =>{
    return val === '='
}

export function Button(props){
    return(
        <div onClick={ShiftFunction(props.value)? props.handleEqual : ()=>props.handleClick(props.value)} className={isOperator(props.value)? 'btn' : 'operator'}>
            {props.value}
        </div>
    )
}