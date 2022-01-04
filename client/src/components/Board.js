import Square from "./Square";

import React from 'react'

const Board = ({squares, onClick}) => {
    return (
        <div className="board">
            {squares.map((square, i) => (
                <square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board
