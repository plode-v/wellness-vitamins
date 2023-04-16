import styled from "styled-components"
import NavBar from "../components/NavBar"
import Products from "../components/Products/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    
`

const ProductList = () => {
    return (
        <div className="product-page-container">
            <NavBar />
            <h1 className="product-page-title">Vitamins</h1>
            <div className="product-page-filter-container">
                <div className="product-page-filter">
                    <span>Filter Products:</span>
                    <select className="product-page-select">
                        <Option selected>Color (Default)</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </select>
                    <select className="product-page-select">
                        <Option selected>Size (Default)</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </select>
                </div>
                <div className="product-page-filter">
                    <span>Sort Products:</span>
                    <select className="product-page-select">
                        <Option selected>Default</Option>
                        <Option>Price (High - Low)</Option>
                        <Option>Price (Low - High)</Option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;