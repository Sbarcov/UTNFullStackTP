import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        <main class='Header'>
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
            <Link to = "/"><img src="img/LogoP.png" alt="LogoP" class='Box3'></img></Link>

        </div>
        </main>
    );
}
export default Header;