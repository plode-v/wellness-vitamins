import "./productStyles.css"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShoppingCart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({item}) => {

    return (
        <div className="product-main-div">
            <div className="product-circle" />
            <img className="product-img" src={item.img} />
            <div className="product-info">
                <div className="product-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className="product-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="product-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>

        </div>
    )
}

export default Product;