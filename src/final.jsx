import React from 'react'
import ReactDOM from 'react-dom'
import {b} from './laberinto.jsx'
import img from './fotos/Portal.png'
const Goal = ({x,y}) =>{

    const style = {
        width: `${b}px`,
        height: `${b}px`,
        background: 'none',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
      
        <img src={img} style={style}/>
        
    )
}

export default Goal