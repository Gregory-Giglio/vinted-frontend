import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";


const Login = ({handleToken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    return (
        <div className="container login">
            <form
                className="login"
                onSubmit={async (event) => {
                    event.preventDefault();

                    const data = {
                        email: email,
                        password: password,
                      };

                    try {
                        
                        const response = await axios.post(`https://lereacteur-vinted-api.herokuapp.com/user/login`, data);

                        if (response.data.token) {
                            handleToken(response.data.token);
                            navigate("/publish");
                        }
                    } catch (error) {
                        console.error(error.response.data);
                    }
                }}
            >
                <h1>Se connecter</h1>
                <input className="signup-input"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(event) =>{
                        setEmail(event.target.value);
                    }}
                />
                <input className="signup-input"
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(event) =>{
                        setPassword(event.target.value);
                    }}
                />
                <button type="Submit" className="button-register">Se connecter</button>
            </form>
            <Link to="/signup" className="nodecoration"><p>Pas encore de compte ? inscris-toi !</p></Link>
        </div>
    );
};

export default Login;