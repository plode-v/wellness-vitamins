import styled from "styled-components";
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color === "none" ? "transparent" : props.color};
    border: ${props=>props.color === "white" ? "1px solid" : "none"};
`

const Hr = styled.hr`
    background-color: #bdbdbd;
    border: none;
    height: 1px;
`

const Cart = () => {
    return (
        <div className="cart-container">
            <NavBar />
            <div className="cart-wrapper">
                <h1 className="cart-title">Your Cart</h1>
                <div className="cart-top">
                    <button>Continue Shopping</button>
                    <div className="cart-top-texts">
                        <span>Shopping Bag(2)</span>
                        <span>Your Wishlist(0)</span>
                    </div>
                    <button type="filled">Checkout</button>
                </div>
                <div className="cart-bottom">
                    <div className="cart-info">
                        <div className="cart-bottom-product">
                            <div className="cart-product-detail">
                                <img className="cart-product-img" src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02385/l/37.jpg" />
                                <div className="cart-product-desc">
                                    <span className="cart-product-name"><b>Product: </b>ON Creatine</span>
                                    <span className="cart-product-id"><b>ID: </b>1233123</span>
                                    <ProductColor color="white" />
                                    <span className="cart-product-size"><b>Size: </b>XL</span>
                                </div>
                            </div>
                            <div className="cart-price-detail">
                                <div className="cart-product-amount-container">
                                    <FontAwesomeIcon icon={faAdd} />
                                    <div className="cart-product-amount">2</div>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>
                                <div className="cart-product-price">$30</div>
                            </div>
                        </div>
                        <Hr />
                        <div className="cart-bottom-product">
                            <div className="cart-product-detail">
                                <img className="cart-product-img" src="https://image.makewebeasy.net/makeweb/m_1920x0/k7p5FZEpV/OnGSD/31.jpg" />
                                <div className="cart-product-desc">
                                    <span className="cart-product-name"><b>Product: </b>ON Whey Protein</span>
                                    <span className="cart-product-id"><b>ID: </b>112131249</span>
                                    <ProductColor color="black" />
                                    <span className="cart-product-size"><b>Size: </b>5LB</span>
                                </div>
                            </div>
                            <div className="cart-price-detail">
                                <div className="cart-product-amount-container">
                                    <FontAwesomeIcon icon={faAdd} />
                                    <div className="cart-product-amount">1</div>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>
                                <div className="cart-product-price">$29</div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <h1 className="cart-summary-title">Order Summary</h1>
                        <div className="cart-summary-item">
                            <span className="cart-summary-item-text">Subtotal</span>
                            <span className="cart-summary-item-price">$59</span>
                        </div>
                        <div className="cart-summary-item">
                            <span className="cart-summary-item-text">Estimated Shipping</span>
                            <span className="cart-summary-item-price">$4.99</span>
                        </div>
                        <div className="cart-summary-item">
                            <span className="cart-summary-item-text">Shipping Discount</span>
                            <span className="cart-summary-item-price">-$4.99</span>
                        </div>
                        <div className="cart-summary-item" type="total">
                            <span className="cart-summary-item-text">Total</span>
                            <span className="cart-summary-item-price">$59</span>
                        </div>
                        <button type="submit" className="cart-summary-button">CHECKOUT</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Cart;