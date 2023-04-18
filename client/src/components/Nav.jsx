import { Form, Badge, Nav, Navbar, Container, Row, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./styles/Nav.css"
import "./styles/Navbar.css"
import { catNavData } from "../data";

const TopNav = () => {
	const handleSearch = (event) => {
		event.handleDefault();
	}
	

	return (
		<Navbar expand="md" id="Navbar" onSubmit={handleSearch}>
			<Navbar.Brand className="Navbar-Left"><h1 className="Navbar-Logo">LOGO.</h1></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Offcanvas id="basic-navbar-nav">
				<div className="Navbar-Center">
					<Form className="Navbar-Search">
						<Form.Control 
							placeholder="Search"
							className="Navbar-Input shadow-none"
						/>
						<button type="submit">
							<FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
						</button>
					</Form>

				</div>
				<Nav className="Navbar-Right">
					<Nav.Link className="Navbar-MenuItem">EN</Nav.Link>
					<Nav.Link className="Navbar-MenuItem">ACCOUNT</Nav.Link>
					<Nav.Link className="Navbar-MenuItem">
						<FontAwesomeIcon icon={faShoppingCart} />
						<Badge bg="primary">2</Badge>
					</Nav.Link>				
				</Nav>
			</Navbar.Offcanvas>
			</Navbar>
  )
};

export default TopNav;