import React from 'react';

const Roster = ({roster, deletePlayer}) => {
    const rosterList = roster.map(player => {
        return (
            <div className='roster' key={player.id}>
                <div>Name: { player.name }</div>
                <div>Age: { player.age }</div>
                <div>Position: { player.position }</div>
                <button onClick={() => {deletePlayer(player.id)}}>Delete</button>
            </div>
        );
    })
        return(
            <div className='roster-list'>
                { rosterList }
            </div>
        )
}

export default Roster;