//import styles

//class changed to function
function Square(props){
  return (
    <button className="square" onClick={ props.onClick}>
      {props.value}
    </button>
  );
}
//parents of sqaure child to Game
class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squareArray[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squareArray: Array(9).fill(null),
      }],
      isXNext: true,
      stepNumber: 0,
    };
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      isXNext: stepNumber % 2 === 0
    });
  }

  //how my click listener gets handled and deals with the change of state
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squareArr = current.squareArray.slice();
    if( calculateWinner(squareArr) || squareArr[i]){
      return;
    }
    // ternary operation that checks who's next
    squareArr[i] = this.state.isXNext ? 'X' : 'O';
    this.setState({ 
      history: history.concat([
        {
          squareArray: squareArr,
        }
      ]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext
    })
  }

  render() {
    const history = this.state.history;
    const current =  history[this.state.stepNumber];
    const winner = calculateWinner(current.squareArray);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move : 'Go to start';
      return ( 
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}> {desc} </button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next Player ' + (this.state.isXNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squareArray}
            onClick={(i) => this.handleClick(i)}
           />
        </div>
        <div className="game-info">
          <div> { status } </div>
          <ol>{ moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//helper javascript function
function calculateWinner(squareArray){
  //mapping which elements in squareArray create winning lines in this game
  const possibleWinninglines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < possibleWinninglines.length; i++){
    const [a, b, c] = possibleWinninglines[i];
    if (squareArray[a] && squareArray[a] === squareArray[b] && squareArray[a] === squareArray[c]) {
      return squareArray[a];
    }
  }

  return null;
}
