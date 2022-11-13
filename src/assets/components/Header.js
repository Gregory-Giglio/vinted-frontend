import logo from "../img/logo-vinted.svg";
import {Link} from "react-router-dom";

const Header = ({token, handleToken}) => {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo-vinted" /></Link>
            
            <form action="Submit">
                <input className="search" type="text" placeholder="Recherche des articles"/>
            </form>
            
            {token ? (
                <button
                    onClick={()=>{
                        handleToken(null);
                    }}
                    className="header-button"
                >
                    Se déconnecter
                </button>
            ) : (
                <>
                    <Link to="/signup"><button className="header-button">S'inscrire</button></Link>
                    <Link to="/login"><button className="header-button">Se connecter</button></Link>
                </>
            )}

            <button className="header-sellbutton">Vends tes articles</button>
        </header>
    );
};

export default Header;