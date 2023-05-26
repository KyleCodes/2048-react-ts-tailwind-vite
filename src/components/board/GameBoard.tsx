import React, { ReactElement } from 'react'
import BGTile from '../game_tiles/BGTile';

function GameBoard(): ReactElement {

    return (
        <div className='w-[600px] h-[600px] rounded bg-gray-300 flex flex-col justify-around p-2'>
            <div className='grid grid-cols-4 gap-2 grid-rows-4 grid-'>
                <BGTile value={1} />
                <BGTile value={2} />
                <BGTile value={3} />
                <BGTile value={4} />
                <BGTile value={5} />
                <BGTile value={6} />
                <BGTile value={7} />
                <BGTile value={8} />
                <BGTile value={9} />
                <BGTile value={10} />
                <BGTile value={11} />
                <BGTile value={12} />
                <BGTile value={13} />
                <BGTile value={14} />
                <BGTile value={15} />
                <BGTile value={16} />
            </div>
        </div>
    );
}


export default function GameBoardContainer(): ReactElement {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center border-4 border-spacing-4'>
            <GameBoard />
        </div>
    )
}