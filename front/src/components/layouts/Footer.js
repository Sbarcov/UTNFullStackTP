import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = (props) => {
    return (
        <div class='FooterStyle'
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
    <Container>
      <Row>
        <Col>Hecho por Sebastian</Col>
        <Col>Contacto: 1234-56789</Col>
        <Col>Ejemplo@Ejmp.com</Col>
      </Row>
    </Container>
    </div>
    );
}
export default Footer;