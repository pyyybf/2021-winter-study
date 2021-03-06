import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game.js'

function App() {
    return (
        <div>
            <Game/>{/*井字棋游戏*/}
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
