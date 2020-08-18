import React , { useState }from 'react';
import './App.css'
import {Button} from './Components/Button'
import Display from './Components/display'
import Clear from './Components/clear'
import * as math from 'mathjs'

function App() {

  const [state , setState] = useState('0')

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0' ,'.' ,'=' ,'+']

  const handleClick = val =>{
    if(state !== '0'){
      setState(state + val)
    }else{
      setState(val)
    }
    
  }
  const handleEqual = () =>{
    setState(math.evaluate(state) )
  }
  const handleClear = () =>{
    setState('0')
  }
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display
          value = {state}
        />
        <div className="btn-wrapper">
          {buttons.map(item=><Button
            value = {item}
            key = {buttons.indexOf(item)}
            handleClick = {handleClick}
            handleEqual = {handleEqual}
          />)}
        </div>
        <Clear handleClear = {handleClear}/>
      </div>
    </div>
  );
}

export default App;
