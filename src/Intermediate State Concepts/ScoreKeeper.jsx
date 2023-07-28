import { useState } from "react";

const ScoreKeeper =()=>{
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})

    const incrementP1Score =()=>{
        const newScore = {...scores, p1Score: scores.p1Score + 1};
        setScores(newScore);
    }
// Similar to incrementP1Score, but this time, taking in a callback method
    const incrementP2Score =()=>{
        setScores(prevScores => {
            return {...prevScores, p2Score: prevScores.p2Score + 1};
        })
    }
    return(
        <>
            <h2>Player 1: {scores.p1Score}</h2>
            <h2>Player 2: {scores.p2Score}</h2>

            <button onClick={incrementP1Score}>+1 Player 1</button>
            <button onClick={incrementP2Score}>+1 Player 2</button>
        </>
    )
};

export default ScoreKeeper;