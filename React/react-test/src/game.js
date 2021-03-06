import React from 'react';

//函数组件
function Square(props) {
    return props.highlight ? (
        <button className="square-highlight" onClick={props.onClick}>
            {props.value}
        </button>
    ) : (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                highlight={this.props.winner && this.props.winner.includes(i)}
            />
        );
    }

    render() {
        var board = [];
        for (let i = 0; i < 3; i++) {
            var row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(i * 3 + j))
            }
            board.push(
                <div className="board-row">
                    {row}
                </div>
            );
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}

//传入长度为9的数组，判断获胜者，并根据情况返回“X”，“O”或“null”。
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                idx: [null, null],
            }],
            stepNumber: 0,
            xIsNext: true,
            order: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ //把新的历史记录拼接到history上
                squares: squares,
                idx: [Math.floor(i / 3), i % 3],
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleOrder() {
        this.setState({
            order: !this.state.order,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winnerInfo = calculateWinner(current.squares);

        var moves = [];
        if (this.state.order) {
            for (let move = 0; move < history.length; move++) {
                const desc = move ?
                    'Go to move #' + move + ' (' + history[move].idx[1] + ',' + history[move].idx[0] + ')' :
                    'Go to game start';
                moves.push(
                    <li>
                        <button className="history-btn" onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            }
        } else {
            for (let move = history.length - 1; move >= 0; move--) {
                const desc = move ?
                    'Go to move #' + move + ' (' + history[move].idx[1] + ',' + history[move].idx[0] + ')' :
                    'Go to game start';
                moves.push(
                    <li>
                        <button className="history-btn" onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            }
        }

        let status, winnerIdx;
        if (winnerInfo) {
            const winner = winnerInfo.winner;
            status = 'Winner: ' + winner;
            winnerIdx = winnerInfo.idx;
        } else {
            status = this.state.stepNumber === 9 ? 'Dogfall!' : ('Next player: ' + (this.state.xIsNext ? 'X' : 'O'));
            winnerIdx = null;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winner={winnerIdx}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.handleOrder()}>{this.state.order ? '逆序显示历史记录' : '顺序显示历史记录'}</button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
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
    ]; //所有赢的方式
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                idx: lines[i],
            };
        }
    }
    return null;
}

export default Game;