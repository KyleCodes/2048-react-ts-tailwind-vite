import React, { ReactElement } from 'react'

const styles = {
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
  `
}

type TileProps = Readonly<{
    value: number,
}>

export default function BGTile(props: TileProps): ReactElement {

    const { value } = props;

    return (
        <div className={styles.bg_tile}>
            {value}
        </div>
    )
}
