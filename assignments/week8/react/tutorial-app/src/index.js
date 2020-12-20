// 12/16/2020 React (Today is the final class for the Backend!)
// Tutorial: Intro to React
//https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);  //use super, if extending; you need to always call super when defining the constructor of a subclass.
        this.state = {
            value: null,
        }
    }


    render() {
      return (
        //<button className="square" onClick={function() { alert('clicked'); }}>
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  

// continue hereeeeeeeeeeeeee, check website
// https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment


  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //squares: [null, null, null, null, null, null, null, null, null],
            squares: Array(9).fill(null),
        }
    }


    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
        console.log(squares);
    }


    renderSquare(i) {
      return <Square value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
  