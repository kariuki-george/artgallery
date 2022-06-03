import React from 'react'
import styles from "./Search.module.scss"

function Search() {
  return (
    <div className={styles.search}>
        <input type="text" className={styles.search_input} placeholder="search"/>
    </div>
  )
}

export default Search