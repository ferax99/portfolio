import React, { useState } from 'react';

// Componente individual para cada celda del tablero
const Square = ({ value, onClick, highlight }) => {
  const textColorClass = value === 'X' ? 'text-[#FF8800]' : 'text-blue-400'; // Colores para X y O
  const highlightClass = highlight ? 'bg-zinc-600' : 'bg-zinc-700'; // Resalta celdas ganadoras

  return (
    <button
      className={`w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center
                  text-5xl sm:text-6xl font-extrabold rounded-md transition-all duration-200
                  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF8800] focus:ring-offset-2 focus:ring-offset-zinc-800
                  ${highlightClass} ${textColorClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

// Componente principal del juego Tic-Tac-Toe
const TicTacToe = () => {
  // Estados del juego
  const [board, setBoard] = useState(Array(9).fill(null)); // El tablero del juego
  const [xIsNext, setXIsNext] = useState(true); // true si es el turno de X, false si es el turno de O
  const [winner, setWinner] = useState(null); // Almacena el ganador ('X', 'O', 'Empate' o null)
  const [winningLine, setWinningLine] = useState(null); // Almacena la línea ganadora para resaltarla
  const [playerXName, setPlayerXName] = useState(''); // Nombre del jugador X
  const [playerOName, setPlayerOName] = useState(''); // Nombre del jugador O
  const [gameStarted, setGameStarted] = useState(false); // Indica si el juego ha comenzado

  // Función para manejar el clic en una celda
  const handleClick = (i) => {
    // Si ya hay un ganador, o la celda está ocupada, o el juego no ha comenzado, no hacer nada
    if (winner || board[i] || !gameStarted) {
      return;
    }

    // Crea una copia del tablero para no mutar el estado directamente
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O'; // Coloca la marca del jugador actual
    setBoard(newBoard);
    setXIsNext(!xIsNext); // Cambia de turno

    // Verifica si hay un ganador después del movimiento
    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner.winner);
      setWinningLine(currentWinner.line);
    } else if (!newBoard.includes(null)) {
      // Si no hay ganador y el tablero está lleno, es un empate
      setWinner('Draw');
    }
  };

  // Función para renderizar una celda del tablero
  const renderSquare = (i) => {
    const highlight = winningLine && winningLine.includes(i);
    return (
      <Square
        value={board[i]}
        onClick={() => handleClick(i)}
        highlight={highlight}
        key={i} // Asegura una key única para cada elemento en la lista
      />
    );
  };

  // Función para iniciar o reiniciar el juego
  const startGame = () => {
    if (!playerXName || !playerOName) {
      alert('Por favor, ingresa los nombres de ambos jugadores para comenzar.');
      return;
    }
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine(null);
    setGameStarted(true);
  };

  // Determina el estado del juego para mostrar el mensaje adecuado
  let status;
  if (!gameStarted) {
    status = 'Ingresa los nombres de los jugadores y presiona "Comenzar Juego"';
  } else if (winner) {
    if (winner === 'Draw') {
      status = '¡Empate!';
    } else {
      status = `Ganador: ${winner === 'X' ? playerXName : playerOName}`;
    }
  } else {
    status = `Turno de: ${xIsNext ? playerXName : playerOName} (${xIsNext ? 'X' : 'O'})`;
  }

  return (
    <section id="tic-tac-toe" className="py-16 bg-zinc-900 rounded-xl shadow-lg mx-4 mt-8">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-12">Tic-Tac-Toe Multijugador</h2>

        {/* Sección de entrada de nombres de jugadores */}
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700 mb-8 text-gray-200">
          <div className="mb-4">
            <label htmlFor="playerX" className="block text-lg font-medium text-gray-300 mb-2">
              Jugador X (Primer Turno):
            </label>
            <input
              type="text"
              id="playerX"
              value={playerXName}
              onChange={(e) => setPlayerXName(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
              placeholder="Nombre Jugador 1"
              disabled={gameStarted && !winner} // Deshabilitado si el juego está en curso sin ganador
            />
          </div>
          <div className="mb-6">
            <label htmlFor="playerO" className="block text-lg font-medium text-gray-300 mb-2">
              Jugador O:
            </label>
            <input
              type="text"
              id="playerO"
              value={playerOName}
              onChange={(e) => setPlayerOName(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
              placeholder="Nombre Jugador 2"
              disabled={gameStarted && !winner} // Deshabilitado si el juego está en curso sin ganador
            />
          </div>
          <button
            onClick={startGame}
            className="w-full bg-[#FF8800] text-white font-bold py-3 px-6 rounded-full shadow-md
                      hover:bg-[#FF6F00] transition-all duration-300 transform hover:scale-105
                      focus:outline-none focus:ring-2 focus:ring-[#FF8800] focus:ring-offset-2 focus:ring-offset-zinc-800"
          >
            {gameStarted && !winner ? 'Reiniciar Juego' : 'Comenzar Juego'}
          </button>
        </div>

        {/* Estado del juego */}
        <div className="text-center text-xl sm:text-2xl font-semibold mb-6 text-gray-100">
          {status}
        </div>

        {/* Tablero de juego */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 justify-center items-center max-w-xs sm:max-w-md mx-auto p-4 bg-zinc-800 rounded-lg shadow-xl border border-zinc-700">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
        </div>
      </div>
    </section>
  );
};

// Función auxiliar para calcular el ganador
const calculateWinner = (squares) => {
  // Posibles líneas ganadoras (filas, columnas, diagonales)
  const lines = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila del medio
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Si los tres cuadros de una línea son iguales y no están vacíos, hay un ganador
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] }; // Retorna el ganador y la línea
    }
  }
  return null; // No hay ganador
};

export default TicTacToe;
