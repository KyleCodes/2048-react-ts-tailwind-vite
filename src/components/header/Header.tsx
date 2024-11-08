import React, {ReactElement} from "react"

const styles = {
  header: `
      flex 
      flex-row 
      w-full 
      bg-gray-600 
      justify-center 
      items-center
      p-2
      text-4xl
    `,
}

export default function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <h1>2048</h1>
    </div>
  )
}
