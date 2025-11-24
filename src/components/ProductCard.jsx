import { Button, Card } from 'react-bootstrap';
export default function ProductCard({ product }) {

    return (
        <Card className='h-100'>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
                <Button variant="info">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}
