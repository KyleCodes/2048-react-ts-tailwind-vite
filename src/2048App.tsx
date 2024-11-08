import React, {ReactElement} from "react"
import {GameBoardContainer as GameBoard} from "./components/board/GameBoard"
import Header from "./components/header/Header"

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
}

export default function App(): ReactElement {
  return (
    <div className={styles.app + styles.text}>
      <Header />
      <GameBoard />
    </div>
  )
}
