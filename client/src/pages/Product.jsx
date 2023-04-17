import styled from "styled-components"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    background-color: ${props=>props.color};
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`
    cursor: pointer;
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    font-size: 1.1rem;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f0f0f0;

    }
`


const Product = () => {

    return (
        <div>
            <NavBar />
            <div className="product-page-wrapper">
                <div className="product-page-imgContainer">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </div>
                <div className="product-page-infoContainer">
                    <h1>Denim Jumpsuit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus melasuada, lactus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitor elit justo, consequat id condmentum ac, volutpat ornare.</p>
                    <span id="product-page-price">$20</span>
                    <div className="product-page-filterContainer">
                        <div className="product-page-filter">
                            <span className="product-page-filterSize">Color</span>
                            <FilterColor className="product-page-filterColor" color='black' />
                            <FilterColor className="product-page-filterColor" color="darkblue" />
                            <FilterColor className="product-page-filterColor" color='gray' />
                        </div>
                        <div className="product-page-filter">
                            <span className="product-page-filterSize">Size</span>
                            <select className="product-page-filter-select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <AddContainer>
                        <AmountContainer>
                            <FontAwesomeIcon icon={faMinus} />
                            <Amount>1</Amount>
                            <FontAwesomeIcon icon={faPlus} />
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )

}

export default Product;