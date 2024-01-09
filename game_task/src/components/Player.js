import React from 'react'

const Player = ({id,handleScore,newScore,value}) => {
  return (
    <div className='forBorder'>

        <div className='Player'>
                        <p className='playerPara'>Player1</p>
                        <p className='Score'>{newScore}</p>
                        <button 
                            onClick={()=>(handleScore(id))}
                            disabled = {value}
                        >
                            Increment Score
                        </button>
        </div>
      
    </div>
  )
}

export default Player
