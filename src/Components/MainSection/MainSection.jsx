import React, { useEffect, useState } from 'react'
import styles from './mainSection.module.css'
import axios from 'axios'
import { ProductCard } from '../ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../api/reducer/productsSlice'

const MainSection = () => {

    const data = useSelector((state) => state.get.products)
    console.log('UI ',data);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])


    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //     .then(res => {
    //         setData(res.data.products)
    //     })
    // }, [])

    // const addToBasket = (id) => {
    //     let item = data.find(item => item.id == id)
    //     axios.post('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/basket', item)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    // }

  return (
    <div className={styles.container}>
        <div className={styles.productsSection}>
            <h1>Best Selling</h1>
            <div className={styles.productsCards}>
                {data.map(item => <ProductCard key={item.id} item={item} text='Add to Cart'/>)}
            </div>
        </div>
    </div>
  )
}

export default MainSection