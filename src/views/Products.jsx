import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(data => data.json())
                .then(data => setProducts(data))
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <Container className="mt-4">
            <Row>
                {
                    products.length > 0 ?
                        products.map(product => (
                            <Col key={product.id} md={6} lg={3} className="p-3">
                                <ProductCard product={product} />
                            </Col>
                        ))
                        :
                        <div className="flex justify-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                }
            </Row>
        </Container>
    )
}
