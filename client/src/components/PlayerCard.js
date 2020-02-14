import React from 'react';
import "../App.css";

const PlayerCard = ({playerInfo}) => {
    // console.log(playerInfo)
    const {name, team, rank } = playerInfo;
    return (
        <div className="card-wrapper">
            <h1 className="card-name">{ name }</h1>
            <p className="card-team"> Team: { team }</p>
            <p className="card-rank"> Rank: { rank }</p>
            
        </div>
    )
}

export default PlayerCard;