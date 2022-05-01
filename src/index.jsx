import React from 'react';
import ReactDOM from 'react-dom';
import Laberinto from './laberinto.jsx';

const domReal = document.getElementById('laberinto');
const domVirtual = <Laberinto />;

// ReactDOM.render(
//     <App/>, document.getElementById('root')
// )
ReactDOM.render(<App />, document.getElementById('root'));
