import { Facebook, Instagram, Twitter, } from "@mui/icons-material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Row, Col } from "react-bootstrap"
import "./styles/Footer.css"
import { Container } from "react-bootstrap"

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <Row className="footer-row">
                <Col className="footer-col-left" sm={6} md lg xl xxl>
                    <h1>LOGO.</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomised words which don't even slightly belivable.</p>
                    <div className="footer-social-icons">
                        <div id="fb">
                            <Facebook />
                        </div>
                        <div id="ig">
                            <Instagram />
                        </div>
                        <div id="tw">
                            <Twitter />
                        </div>
                    </div>
                </Col>
                <Col className="footer-col-center" sm={6} md>
                    <h2>Usefil Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Vitamins</li>
                        <li>Men's Apparels</li>
                        <li>My Account</li>
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Muscle Building</li>
                        <li>Women's Apparels</li>
                        <li>Order Tracking</li>
                        <li>Terms</li>
                    </ul>
                </Col>
                <Col className="footer-col-right" sm={12} md>                
                    <h2>Contact</h2>
                    <div className="footer-contact-item">
                        <FontAwesomeIcon className="footer-contact-icon" icon={faLocationDot} />
                        123 Lorem Blvd. Ipsum CA, 92665
                    </div>
                    <div className="footer-contact-item">
                        <FontAwesomeIcon className="footer-contact-icon" icon={faPhone} />+1 234 5678
                    </div>
                    <div className="footer-contact-item">
                        <FontAwesomeIcon className="footer-contact-icon" icon={faEnvelope} />+1 234 5678
                    </div>
                    <img className="footer-payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;