import React from 'react';
import { b } from './laberinto';
import foto from './fotos/Ghost.svg';
import foto2 from './fotos/Ghost.svg';

function Fantasma({ direction, x, y }) {
  let rotacion = 0;
  if (direction === 0) {
    rotacion = 0;
  }
  if (direction === 1) {
    rotacion = 270;
  }
  if (direction === 2) {
    rotacion = 0;
  }
  if (direction === 3) {
    rotacion = 0;
    const style = {
      width: `${b}px`,
      height: `${b}px`,
      gridColumnStart: x + 1,
      gridRowStart: y + 1,
      transform: `rotate(${rotacion}deg)`,

    };
    return (
      <img src={foto} alt="" />
    );
  }

  return (
    <img src={foto2} alt="" />
  );
}
export default Fantasma;
