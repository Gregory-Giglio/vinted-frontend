import logo from "../img/logo-vinted.svg";
import {Link} from "react-router-dom";

const Header = ({token, handleToken, search, setSearch}) => {
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo-vinted" /></Link>
            
            <input 
                className="search" type="text" placeholder="Recherche des articles" value={search}
                onChange={(event)=>{
                    setSearch(event.target.value);
                }}
            />
                        
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

            <Link to="/publish"> <button className="header-sellbutton">Vends tes articles</button></Link>
        </header>
    );
};

export default Header;