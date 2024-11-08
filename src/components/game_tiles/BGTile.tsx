import React, {ReactElement} from "react"
import SharedTileStyles from "./sharedTileStyles"

const styles = {
  base_tile: SharedTileStyles.tile,
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
}

export default function BGTile(): ReactElement {
  console.log("hello world")
  return <div className={styles.base_tile + styles.bg_tile}></div>
}
