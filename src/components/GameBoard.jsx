

export default function GameBoard({ onSelectSquare,board}) {

  // let gameBoard = initialGameBoard;

  // for (const turn of turns) {
  //   const { square, Player } = turn;
  //   const {row,col} = square;
  //   gameBoard[row][col] = Player;
  // }
  // const [gameBoard, setGameBoard] = useState(
  //   initialGameBoard,
  //   activePlayerSymbol
  // );
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              console.log(playerSymbol),
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>
                  {playerSymbol}
                </button>
              </li> 
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
