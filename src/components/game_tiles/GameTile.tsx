import React, {ReactElement} from "react"
import SharedTileStyles from "./sharedTileStyles"

const styles = {
  base_tile: SharedTileStyles.tile,
  game_tile: `
    text-5xl
    bg-gray-100
  `,
}

type Props = {
  id?: number
  value: number
  position?: [number, number]
  mergeWith?: boolean
}

export default function GameTile(props: Props): ReactElement {
  const {id, value, position, mergeWith} = props

  return <div className={styles.base_tile + styles.game_tile}>{value}</div>
}
