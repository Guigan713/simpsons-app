import { Link } from 'react-router-dom';

import './Game.css';

const Game = ({ gameList }) => {
    return (
        <div className="gameContainer">
                <Link to={{pathname:`/${gameList.id}`}}>
                <h1 className="gameName">{gameList.name}</h1>
                </Link>
                <img className="gameImg" src={gameList.background_image} alt="game" />
                <h2 className="gameInfos">{gameList.id}</h2>
                <p className="gameInfos">Rating : {gameList.rating}</p>
                <p className="gameInfos">{gameList.released}</p>
        </div>
    );
}
 
export default Game;