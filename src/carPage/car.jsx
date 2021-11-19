import React from 'react'
import BoxCards from '../components/boxPage/cards'
import CarCorusuel from '../components/carCoruselPage/carCorusel'
import Navbar from '../components/navbar/navbar'
import "./style.css"

function CarPage() {
    return (
        <div>
            <Navbar/>
            <CarCorusuel/>
            <BoxCards/>
        </div>
    )
}

export default CarPage
