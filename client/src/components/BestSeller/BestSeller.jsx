import "./bestSeller.css"
import { Card, Container } from "react-bootstrap"
import styled from "styled-components"

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    padding: 30px 0 50px;
`

const BestSeller = () => {
    return (
        <Container>
            <H1>Best Seller</H1>
            <Card className="bestseller-card">
                <Card.Body className="bestseller-card-body">
                    Hello
                </Card.Body>
            </Card>
        </Container>
    )
}

export default BestSeller;