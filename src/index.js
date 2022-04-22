import React from 'react'
import ReactDOM from 'react-dom'
import Laberinto from './laberinto.js'

const domReal = document.getElementById('laberinto')
const domVirtual = <Laberinto/>

ReactDOM.render(domVirtual, domReal)