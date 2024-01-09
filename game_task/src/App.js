import { useEffect, useState } from 'react';
import Header from './components/Header';
import Players from './components/Players';



function App() {

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [gameResult , setGameResult] = useState('');

  useEffect(()=>{
    const handleResult = () => {
      if(score1 === 40 && score2 === 40){
        setGameResult('Duce State!');
      } else if(score1 === 60){
        setGameResult('Player 1 Wins!');
      } else if(score2 === 60){
        setGameResult('Player 2 Wins!');
      }
      else if(score1 === 50 && score2 === 50){
        setGameResult('Game Tie!');
      }
      else if(score1 === 50){
        setGameResult('Player 1 has Advantage!');
      }
      else if(score2 === 50){
        setGameResult('Player 2 has Advantage!');
      }
    }

    handleResult();
  }
  
  ,[score1,score2,gameResult]);

  const handleScore = (id) => {
     if(id === 1){
       (score1 < 30) ? setScore1(score1+15) : setScore1(score1+10);
     }
     else{
      (score2 < 30) ? setScore2(score2+15) : setScore2(score2+10);
     }
  }

  const scoreLimiter = (score) => {
    const newScore = (score<=40) ? score : 40;
    return newScore;
  }


  return (
    <div className="App">
      {gameResult && <Header 
      gameResult = {gameResult}
      />}
      <Players
       score1  = {score1}
       score2 = {score2}
       handleScore = {handleScore}
       scoreLimiter = {scoreLimiter}
      />
    </div>
  );
}

export default App;
