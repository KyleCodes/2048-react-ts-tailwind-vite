import React, { ReactElement } from 'react'

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
  tile: `
    flex 
    flex-col 
    justify-center 
    border-4 
    rounded-md
    items-center 
    text-9xl
    w-60 
    h-60 
  `,
  header: `
    flex 
    flex-row 
    text-9xl 
    w-full 
    bg-gray-600 
    justify-center 
    items-center`
};


export default function App(): ReactElement {
  return (
    <div className={styles.app + styles.text}>
      <Header />
      <GameBoard />
    </div>
  )
}

type TileProps = Readonly<{
  value: number,
}>

function Tile(props: TileProps): ReactElement {

  const { value } = props;

  return (
    <div className={styles.tile}>
      {value}
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


function GameBoard(): ReactElement {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center border-4 border-spacing-4'>
      <Tile value={2} />
    </div>
  )
}