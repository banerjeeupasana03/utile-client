class Square extends React.Component {
    render() {
      let self = this;
      return (
        <button className="square" onClick={() => {
            self.props.onClickHandler();
            // self.setState({value : 'X'});
          }}>
          {self.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares:[ 
          ["","",""], 
          ["","",""], 
          ["","",""] 
        ],
        turn: true 
      }
    };
    
    squaresDeepCopy(){
      const newArray = this.state.squares.map((arr)=>{
        return arr.slice();
      })
      return newArray;
    };
    
    renderSquare(row,col) {
      let self = this;
      return <Square value={this.state.squares[row][col]} onClickHandler = {()=>{
          let currentState = {
            squares : self.squaresDeepCopy(),
            turn : self.state.turn
          };
          // let currentState = self.state;
          if(currentState.turn){
            currentState.squares[row][col] = "X";
          } else {
            currentState.squares[row][col] = "O";
          }
          currentState.turn = !currentState.turn;
          self.setState(currentState);
        }}/>;
    }
  
    render() {
      const status = 'Next player is: ' + (this.state.turn ? "X" : "O");
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0,0)}
            {this.renderSquare(0,1)}
            {this.renderSquare(0,2)}
          </div>
          <div className="board-row">
            {this.renderSquare(1,0)}
            {this.renderSquare(1,1)}
            {this.renderSquare(1,2)}
          </div>
          <div className="board-row">
            {this.renderSquare(2,0)}
            {this.renderSquare(2,1)}
            {this.renderSquare(2,2)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
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
  