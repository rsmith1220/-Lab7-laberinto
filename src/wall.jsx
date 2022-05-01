import React from 'react';
import { b } from './laberinto';
import img from './fotos/wall.png';

function Wall({ x, y }) {
  const style = {
    width: `${b}px`,
    height: `${b}px`,
    background: 'none',
    gridColumnStart: x + 1,
    gridRowStart: y + 1,
  };
  return (
    <img src={img} style={style} />
  );
}

export default Wall;
