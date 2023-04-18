import { Navbar, Nav } from "react-bootstrap"
import { catNavData } from "../data";

const CatNav = () => {

    return(
        <Navbar className="catnav-container">
            {catNavData.map(item => (
                <Nav.Link className="catnav-link">
                    <span>
                        {item}
                    </span>
                </Nav.Link>
            ))}
        </Navbar>
    )
}


export default CatNav;