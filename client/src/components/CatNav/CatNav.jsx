import "./styles.css"
import Navbar from "react-bootstrap/Navbar"
import Element from "./Element"

const CatNav = () => {
    return(
        <Navbar className="catnav-parent-div">
            <Element name="New Arrival" />
            <Element name="Vitamins" />
            <Element name="Apparels" />
            <Element name="Clearance" />
        </Navbar>
    )
}


export default CatNav;