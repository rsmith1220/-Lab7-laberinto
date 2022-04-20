import React from 'react'
import {b} from './renderer.js'
import img from './Portal.jpg'
const Goal = ({x,y}) =>{

    const style = {
        width: `${b}px`,
        height: `${b}px`,
        background: 'pink',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
      
        <img src={img} style={style}/>
        
    )
}

export default Goal