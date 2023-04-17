import React from 'react'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import CatNav from '../components/CatNav/CatNav'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            {/* <Announcement /> */}
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home