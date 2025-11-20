import { Col, Container, Row } from "react-bootstrap";

export default function Reviews() {
    return (
        <Container>
            <Row>
                <Col lg={3} md={6}>This is column</Col>
                <Col lg={3} md={6}>This is column</Col>
                <Col lg={3} md={6}>This is column</Col>
                <Col lg={3} md={6}>This is column</Col>
            </Row>
        </Container>
    )
}
