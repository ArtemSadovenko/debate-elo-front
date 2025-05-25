import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../static/data';
import { Player } from '../types/player';

function PlayerHistoryPage() {
    const { id } = useParams<{ id: string }>();
    const player:Player = data.filter((e) => e.id == parseInt(id?id:"-1"))[0]

    return (
        <div>
            {player.name}
        </div>
    )
}

export default PlayerHistoryPage
