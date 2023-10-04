import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Golosinas = (props) => {
    return(
        <div >
    <Container>
      <Row>
        <Col>
        <Card className="Box4" bg="secondary" text='white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/productos/ChocolateKitkat.jpeg"/>
      <Card.Body>
        <Card.Title><h1>Nestle</h1></Card.Title>
        <Card.Text>
        <p>En este catalogo, podras encontrar lo mejor de Nestle, como chocolates Kitkat y CRUNCH.</p>
        </Card.Text>
        <Button variant="primary">Ver Catálogo</Button>
      </Card.Body>
    </Card>
    
        </Col>
        <Col>
        <Card className="Box4" bg="secondary" text='white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/productos/Cadbury.jpeg" />
      <Card.Body>
        <Card.Title><h1>Mondelez</h1></Card.Title>
        <Card.Text>
        <p>Explora este catalogo para encontrar productos como Milka, Cadbury, Mantecol, entre otros.</p>
        </Card.Text>
        <Button variant="primary">Ver Catálogo</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className="Box4" bg="secondary" text='white' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/productos/Roclets.jpeg" />
      <Card.Body>
        <Card.Title><h1>Arcor</h1></Card.Title>
        <Card.Text>
        <p>Aca vas a encontrar toda la linea de Cofler, Rocklets y Mogul.</p>
        </Card.Text>
        <Button variant="primary">Ver Catálogo</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
        </div>
    );
}
export default Golosinas;