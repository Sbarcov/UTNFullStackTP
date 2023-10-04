import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HomePage = (props) => {
    return(

        <div>
            <h1>Destacados</h1>
            <main class='Box'>
             <Carousel >
      <Carousel.Item>
      <img src="img/productos/ChocolatesC.jpeg" alt="CarChoco"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src="img/productos/Kitkat.jpeg" alt="CarKit"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src="img/productos/Mantecol.jpeg" alt="CarMant"></img>
      </Carousel.Item>
    </Carousel>
    </main>
    <Container>
      <Row>
        <Col><h1 class='Box2'>Fotocopias</h1></Col>
        <Col><h1 class='Box2'>Carga Virtual</h1></Col>
        <Col><h1 class='Box2'>Regaleria</h1></Col>
      </Row>
    </Container>
    </div>


    );
}
export default HomePage;