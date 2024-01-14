import React from 'react'
import styles from './addButton.module.css'

const AddButton = ({text, onclick}) => {
  return (
    <button onClick={onclick} className={styles.container}>{text}</button>
      )
}

export default AddButton