import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navi = (props) => {
    return (
      <main class='BarraNav'>
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >

<Nav>
      <Nav.Item>
        <Nav.Link eventKey="link-1" ><Link to = "/Postres"class="NavFont">Postres</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to = "/golosinas" class="NavFont">Golosinas</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to = "/Bebidas" class="NavFont">Bebidas</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to = "/Helados" class="NavFont">Helados</Link></Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
        </main>
    );
}
export default Navi;