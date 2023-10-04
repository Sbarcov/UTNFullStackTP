import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Postres = (props) => {
    return(
        <div>
                <Container>
        <Row>
        <   Col><img src="img/productos/Oreo.jpeg" alt="OreoP" className="BoxPostres"></img></Col>
            <Col>
            <h1>Postre Oreo</h1>
            <p>-Descripción del postre-</p>
            </Col>
        </Row>
        <Row>
        <   Col><img src="img/productos/Lemon.jpeg" alt="LemonP" className="BoxPostres"></img></Col>
            <Col>
            <h1>Lemon Pie</h1>
            <p>-Descripción del postre-</p>
            </Col>
        </Row>
        <Row>
        <   Col><img src="img/productos/Pirineo.jpeg" alt="PirineoP" className="BoxPostres"></img></Col>
            <Col>
            <h1>Pirineo de Frutilla</h1>
            <p>-Descripción del postre-</p>
            </Col>
        </Row>
    </Container>
        </div>
    );
}
export default Postres;