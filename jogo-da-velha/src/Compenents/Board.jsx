import Square from "./Square";
import React, { useState, useEffect } from 'react';


export default function Board(){
   
    const [squares , setSquares] = useState( Array(9).fill(null));
    const [xIsNext , setNext] = useState(true);

    useEffect(() => {
        calculateWinner(squares);
      },[squares]);

    function desenhar(i){
        return(<Square value={squares[i]} onClick={() => click(i)}  />);
    }

    function click(i){
      if(squares[i] == null){
        const squares2 = squares.slice();  
        squares2[i] = xIsNext? "x":"o" ;
        console.log(i);
        setSquares(squares2);
        setNext(!xIsNext); 
      }
    }

    function reinicio(){
        setSquares(Array(9).fill(null));
        setNext(true);
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            alert("O ganhador é o: " + squares[a] + "\nClique em OK para iniciar um novo jogo");
            reinicio();
          }
        }
    }

    const status = 'Next player: ' + (xIsNext ? 'X' : 'O');
   
   return (
     <div>
      <div className="status">{status}</div>
      <div className="board-row">
      {desenhar(0)}
      {desenhar(1)}
      {desenhar(2)}
      </div>
      <div className="board-row">
      {desenhar(3)}     
      {desenhar(4)}
      {desenhar(5)}
      </div>
      <div className="board-row">
      {desenhar(6)}
      {desenhar(7)}
      {desenhar(8)}
      </div>
    </div>    
   )
}



