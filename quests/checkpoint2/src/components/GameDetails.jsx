import { useState, useEffect } from 'react'

import axios from 'axios'


function GameDetails(props)  {

    
    const [gameDetails, setGameDetails] = useState();
    const gamesId = props.match.params.id


    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${gamesId}`)
        .then((response => {
          setGameDetails(response.data.clip.clip)
            
        }))
    },[gamesId])

    return (
        <div className="gameScreens">
           <span>
               <video controls src={gameDetails} />  
           </span>
        </div>
    );
}
 
export default GameDetails;