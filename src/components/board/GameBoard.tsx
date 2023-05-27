import React, { ReactElement } from 'react'
import BGTile from '../game_tiles/BGTile';
import GameTile from '../game_tiles/GameTile';

function GameBoard(): ReactElement {

    return (
        <div className='w-[600px] h-[600px] rounded bg-gray-300 flex flex-col justify-around p-2'>
            <div className='grid grid-cols-4 gap-2 grid-rows-4 grid-'>
                <GameTile value={2} />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
                <BGTile />
            </div>
        </div>
    );
}


export function GameBoardContainer(): ReactElement {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center border-4 border-spacing-4'>
            <GameBoard />
        </div>
    )
}