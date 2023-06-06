import React, { useState, useEffect } from 'react'
import { Calculator } from './Calculator'
import {styles} from './style.css'

export default function App() {

  const [result, setResult] = useState('')

  function handleClick(e) {
    setResult(result.concat(e.target.name))
  }
 
  function clear() {
    setResult('')
  }

  function backspace() {
    setResult(result.slice(0, -1))
  }

  function handleResult() {

    try {
      setResult(eval(result).toString())

    } catch (error) {
      setResult('Error')
    }
    
  }



  return (
    <Calculator 
    result={result}
    handleClick={handleClick}
    handleResult={handleResult}
    clear={clear}
    backspace={backspace}
    />


  )
}
