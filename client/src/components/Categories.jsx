import { categories } from "../data";
import { Row, Col, Container } from "react-bootstrap"

const Categories = () => {

    return (
        <Container className="categories-main-card">
            <Row className="categories-card">
                {categories.map(item => (
                    <Col xs={4} sm={4} lg md={4} className="categories-item justify-content-center">{item}</Col>
                ))}
            </Row>
        </Container>
    )
} 

export default Categories;