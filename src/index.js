import React from 'react'
import ReactDOM from 'react-dom'
import Laberinto from './laberinto.js'
ReactDOM.render(<App/>,document.getElementById('root'));

const domReal = document.getElementById('laberinto')
const domVirtual = <Laberinto/>

ReactDOM.render(domVirtual, domReal)