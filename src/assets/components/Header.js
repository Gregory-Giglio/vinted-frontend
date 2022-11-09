import logo from "../img/logo-vinted.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo-vinted" /></Link>
            
            <form action="Submit">
                <input type="text" />
            </form>
            <button>S'inscrire</button>
            <button>Se connecter</button>
            <button>Vends tes articles</button>
        </header>
    );
};

export default Header;