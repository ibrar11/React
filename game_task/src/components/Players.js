import React from 'react'
import Player from './Player';

const Players = ({score1,score2,handleScore,scoreLimiter}) => {
    let value = false;
    if((score1 === 50 && score2 === 50)||score1 === 60 || score2 === 60){
       value = true;
    }
    return (
    <main className='Players'>
        <Player 
           id = {1}
           handleScore={handleScore}
           newScore={scoreLimiter(score1)}
           value={value}
        />

        <Player 
           id = {2}
           handleScore={handleScore}
           newScore={scoreLimiter(score2)}
           value={value}
        />
      
    </main>
  )
}

export default Players
