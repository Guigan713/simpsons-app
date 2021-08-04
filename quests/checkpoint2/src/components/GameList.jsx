import { useEffect, useState } from "react";
import axios from 'axios';

import Game from './Game';

import './GameList.css';


const GameList = () => {
    const [gameLists, setGameLists] = useState([]);
    const [topRatings, setTopRatings] = useState()
    
    useEffect (() => {
        const recupData = () => {
            axios
                .get(`https://apis.wilders.dev/wild-games/games`)
                .then((response) => response.data)
                .then((data) => 
                  setGameLists(data));       
        }
        recupData()
    }, [])

    const gameRatingHandler = () => {
        setTopRatings(!topRatings)
    }

    return (
        <div className="buttonContainer">
            <button className="clickButton" onClick={gameRatingHandler}>
            Click here for Best rated Games:{topRatings ? 'On' : 'Off'}
            </button>
        {
            
            gameLists.filter((gameList) => !topRatings || gameList.rating > 4.5)
            .map((gameList) => <div key={gameList.id}>
                <Game gameList={gameList} /></div>)
         }  
        </div>
    );

};
            
 
export default GameList;