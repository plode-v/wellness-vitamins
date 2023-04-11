import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nsStyles.css"

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">Newsletter</h1>
            <div className="newsletter-desc">Get timely updates for your favorite products.</div>
            <div className="newsletter-input-container">
                <input className="newsletter-input" placeholder="Your email" />
                <button className="newsletter-button">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;