import React from 'react';

const Roster = ({roster}) => {
    // const rosterList = roster.map(player => {
    //     if (player.age <= 30) {
    //         return (
    //             <div className='roster' key={player.key}>
    //                 <div>Name: { player.name }</div>
    //                 <div>Age: { player.age }</div>
    //                 <div>Position: { player.position }</div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })
    const rosterList = roster.map(player => {
        return player.age <= 30 ? (
            <div className='roster' key={player.key}>
                <div>Name: { player.name }</div>
                <div>Age: { player.age }</div>
                <div>Position: { player.position }</div>
            </div>
        ) : null;
    })
        return(
            <div className='roster-list'>
                { rosterList }
            </div>
        )
}

export default Roster;