import React, { ReactElement, useState } from 'react'

const styles = {
  app: `
    flex
    flex-col
    justify-start
    items-center
    h-screen
    w-screen
    bg-gray-800
  `,
  text: `
    text-white
    text-3xl 
    font-bold
  `,
  bg_tile: `
    flex 
    flex-col 
    justify-center 
    rounded
    items-center 
    text-5xl
    bg-gray-700
    flex-grow
    aspect-square
  `,
  header: `
    flex 
    flex-row 
    w-full 
    bg-gray-600 
    justify-center 
    items-center
    p-2
    text-4xl
    `
};


export default function App(): ReactElement {
  return (
    <div className={styles.app + styles.text}>
      <Header />
      <GameBoardContainer />
    </div>
  )
}

function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <h1>2048</h1>
    </div>
  )
}


function GameBoardContainer(): ReactElement {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center border-4 border-spacing-4'>
      <GameBoard />
    </div>
  )
}

type TileProps = Readonly<{
  value: number,
}>

function BGTile(props: TileProps): ReactElement {

  const { value } = props;

  return (
    <div className={styles.bg_tile}>
      {value}
    </div>
  )
}

function GameBoard(): ReactElement {

  // const [board, updateBoard] = useState<number>(0);



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