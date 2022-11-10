import logo from "../img/logo-vinted.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo-vinted" /></Link>
            
            <form action="Submit">
                <input type="text" />
            </form>
            <Link to="/signup"><button>S'inscrire</button></Link>
            <button>Se connecter</button>
            <button>Vends tes articles</button>
        </header>
    );
};

export default Header;