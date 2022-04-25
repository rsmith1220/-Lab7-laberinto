import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Wall from './wall.jsx'
import Fantasma from './ghost.jsx'
import Goal from './final.jsx'
import Floor from './floor.jsx'
import Ghost from './fotos/Ghost.svg'


const b=50

//https://maze.juanelcaballo.club/?type=json&w=4&h=4

const App =() =>{


    const [laberinto, setLaberinto] = React.useState([])
    const [direction, setDirection] = React.useState(0)
    const [x, setX] = React.useState(1)
    const [y, setY] = React.useState(1)
    const [width, setWidth] = React.useState(5)
    const [height, setHeight] = React.useState(6)
    
    const loadMaze = () =>{
        fetch("https://maze.juanelcaballo.club/?type=json&w="+width+"&h="+height).then(
        response=>{
                return response.json();
            }   
        ).then(
            (response)=>{
                setLaberinto(response)
            }
        )
    }
    
    const dimensionWidth = () =>{
        const widthValue = document.getElementById('ancho').value
        const newWidth = parseInt(widthValue)
        setWidth(newWidth)
        setX(1)
        setY(1)
    }
    const dimensionHeight = () =>{
        const heightValue = document.getElementById('alto').value
        const newHeight = parseInt(heightValue)
        setHeight(newHeight)
        setX(1)
        setY(1)
    }
    

    useEffect(loadMaze,[])
    
    const handleKeyDown = (e)=> {
        if (e.key === "ArrowRight") {
            setDirection(1)
            if(laberinto[y][x+1]===' '||laberinto[y][x+1]==='p'||laberinto[y][x+1]==='g'){
                setX(x+1)
            }
        }
        if (e.key === "ArrowLeft") {
            setDirection(3)
            if(laberinto[y][x-1]===' '||laberinto[y][x-1]==='p'||laberinto[y][x-1]==='g'){
                setX(x-1)
            }
        }
        if (e.key === "ArrowUp") {
            setDirection(0)
            if(laberinto[y-1][x]===' '||laberinto[y-1][x]==='p'||laberinto[y-1][x]==='g'){
                setY(y-1)
            }
        }
        if (e.key === "ArrowDown") {
            setDirection(2)
            if(laberinto[y+1][x]===' '||laberinto[y+1][x]==='p'||laberinto[y+1][x]==='g'){
                setY(y+1)
            }
        }
    }
    const style = {
        width: `${((width+1)+(width*2))*b}px`,
        height: `${b*((height+1)+(height))}px`,
        background: 'green',
        display: 'grid',
        gridTemplate: `repeat(${(width+1)+(width*2)},${b}px)/repeat(${(height+1)+(height)},${b}px)`
    }
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom:'5px',
    }
    const titleStyle = {
        fontSize: '30px',
        fontFamily:'arial',
        color: 'blue'
    }
    const settingsStyle = {
        marginLeft: '200px',
        fontFamily: 'arial',
        background:'none',
        padding:'0  px'
    }
   
    
    return (
    <div  onKeyDown={handleKeyDown} tabIndex = "0">
        <div style={containerStyle}>
        <object data={Ghost} width="100" height="100"> </object>
            <h1 style={titleStyle}>Ghost escape</h1>
            <audio controls>
                    <source src="./ghostmusic.mp3" type="audio/ogg"/>
                </audio>
            <div style={settingsStyle} >
            
                <h4>Ancho:</h4>
                <input type="number" id="ancho" name="quantity"  defaultValue={width} min="2" max="10" onChange={e => setWidth(e.target.value)}></input>
                <input value='Guardar' type="submit" onClick={dimensionWidth} ></input>
                <h4>Alto:</h4>
                <input type="number" id="alto" name="quantity" min="3" max="10" placeholder={height}></input>
                <input value='Guardar' type="submit" onClick={dimensionHeight}></input>  
                <p></p>
                <button onClick={loadMaze}>Recargar</button>
                {/* <button onClick={loadMaze}>Recargar laberinto</button> */}
            </div>


            

        </div>
        <div style={style}>
          {laberinto.map((row,rowIndex)=>{
            return row.map((column,columnIndex)=>{
                if(column==='-' || column==='+'||column==='|'){
                    return <Wall key={`${columnIndex}-${rowIndex}`} x={columnIndex} y={rowIndex}/>
                }
                if(column==='p'){
                    return <Fantasma direction={direction} x={x} y={y}               
                    />
                    
                }
                if(column===' '){
                    return <Floor key={`${columnIndex}-${rowIndex}`} x={columnIndex} y={rowIndex}/>
                }
                if(column==='g'){
                    return <Goal key={`${columnIndex}-${rowIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else{
                    return null
                }
                
            })
        })}  
        </div>
    </div>
    )
    
}

// ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render( <App />, document.getElementById('root'))

export {b}
export default Laberinto
