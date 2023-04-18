import { Facebook, Instagram, Twitter, } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Row, Col } from "react-bootstrap"
import "./styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-left">
                <h1 className="footer-logo">LOGO.</h1>
                <p className="footer-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomised words which don't even slightly belivable.</p>
                <div className="footer-social-container">
                    <div id="fb" color="#3B5999">
                        <Facebook />
                    </div>
                    <div id="ig" color="#E4405F">
                        <Instagram />
                    </div>
                    <div id="tw" color="#55ACEE">
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="footer-unlist">
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Vitamins</li>
                    <li>Muscle Building</li>
                    <li>Men's Apparels</li>
                    <li>Women's Apparels</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-title">Contact</h3>
                <div className="footer-contactItem">
                    <FontAwesomeIcon icon={faLocationDot} className="footer-contactItem-icon" />123 Lorem Blvd. Ipsum CA, 92665
                </div>
                <div className="footer-contactItem">
                    <FontAwesomeIcon icon={faPhone} className="footer-contactItem-icon" />+1 234 5678
                </div>
                <div className="footer-contactItem">
                    <FontAwesomeIcon icon={faEnvelope} className="footer-contactItem-icon" />contact@wellness.com
                </div>
                <img className="footer-payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div>
    )
}

export default Footer;