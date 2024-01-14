import React from 'react'
import styles from './productCard.module.css'
import { AddButton } from '../AddButton'

const ProductCard = ({item, onclick, text}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgBox}>
            <img src={item.thumbnail} alt="" style={{width:'100%', height:'150px'}}/>
        </div>
        <div className={styles.descBox}>
            <h3>{item.title}</h3>
            <p>{item.price} $</p>
        </div>
        <AddButton text={text} onclick={onclick}/>
        <AddButton text='Add to Wishlist'/>
    </div>
  )
}

export default ProductCard