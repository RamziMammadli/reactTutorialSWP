import React from 'react'
import { Header } from '../../Components/Header'
import { MainSection } from '../../Components/MainSection'
import { Footer } from '../../Components/Footer'

const Home = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100vh'}}>
        <Header/>
        <MainSection/>
        <Footer/>
    </div>
  )
}

export default Home