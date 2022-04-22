import React from 'react'
import {b} from './laberinto.js'
import img from './fotos/wall.png'
const Wall = ({x,y}) =>{

    const style = {
        width: `${b}px`,
        height: `${b}px`,
        background: 'black',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
        <img src={img} style={style}/>
    //<div style={style}></div>
    )
}

export default Wall