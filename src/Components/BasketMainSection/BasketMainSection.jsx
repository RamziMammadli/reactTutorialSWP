import React, { useEffect, useState } from 'react'
import styles from './basketMainSection.module.css'
import axios from 'axios';
import { ProductCard } from '../ProductCard';
const BasketMainSection = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/basket')
        .then(res => {
            setData(res.data)
        })
    }, [])

    const removeItem = (id) => {
        axios.delete(`https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/basket/${id}`)
        let filteredData = data.filter(item => item.id !== id)
        setData(filteredData)
    }

  return (
    <div className={styles.container}>
        <div className={styles.productsSection}>
            <h1>Best Selling</h1>
            <div className={styles.productsCards}>
                {data.map(item => <ProductCard item={item} text='Remove' onclick={() => removeItem(item.id)}/>)}
            </div>
        </div>
    </div>
  )
}

export default BasketMainSection