import { Form, Badge, Nav, Navbar, Container } from "react-bootstrap"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
	const handleSearch = (event) => {
		event.handleDefault();
	}
	

  return (
	<Navbar expand="md" id="Navbar" onClick={handleSearch}>
		<Navbar.Brand className="Navbar-Left"><h1 className="Navbar-Logo">LOGO.</h1></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
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
		</Navbar.Collapse>
	</Navbar>
  )
}

export default NavBar;