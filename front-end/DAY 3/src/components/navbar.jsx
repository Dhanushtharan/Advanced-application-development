import { Link } from "react-router-dom";
import logo from '../assets/logosample.png';
import '../assets/css/navbar.css'

const logoStyle = {
    width: '150px',
    height: '40px'
};

const Navigation=()=>{
return(
<nav>
<div className='nav-bar'>
    <ul>
        <Link to='/home'><img src={logo} alt="Logo" style={logoStyle}></img></Link>
        <li>     </li>
        <li>     </li>
        <li>     </li>
        <li>     </li>
        <li>     </li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/aboutpage">About</Link></li>
        <li><Link to="/contactpage">Contact</Link></li>
        <li><Link to="/login">Logout</Link></li>
    </ul>
</div>
</nav>
        );    
    }

export default Navigation;
