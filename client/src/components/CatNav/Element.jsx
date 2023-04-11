import { Nav } from "react-bootstrap";
import styled from "styled-components";
import "./styles.css"

const Span = styled.span`
    & {
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        font-weight: 500;
        font-size: 1.15rem;
        padding: 0 2rem;
        transition: 80ms;
    }
    &:hover {
        color: teal;
        background-color: white;
        transition: 80ms;
    }
`


const Element = (props) => {
    return (
        <Nav.Link className="catnav-children">
            <Span>{props.name}</Span>
        </Nav.Link>
    )
}

export default Element;