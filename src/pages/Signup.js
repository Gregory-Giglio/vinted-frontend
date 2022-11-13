import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";


const Signup = ({handleToken}) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();
    
    return (
        <div className="container signup">
            <form
                className="signup"
                onSubmit={async (event) => {
                    event.preventDefault();
                    
                    const data = {
                        username: user,
                        email: email,
                        password: password,
                        newsletter: newsletter,
                      };
                    try {

                        const response = await axios.post(`https://lereacteur-vinted-api.herokuapp.com/user/signup`, data);
                                                
                        if (response.data.token) {
                            handleToken(response.data.token);
                            navigate("/");
                        }
                    } catch (error) {
                        console.error(error.response.data);
                    }

                                        
                }}
            >
                <h1>S'inscrire</h1>
                <input className="signup-input"
                    type="text" 
                    value={user}
                    placeholder="Nom d'utilisateur"
                    onChange={(event) => {
                        setUser(event.target.value);
                    }}
                />

                <input className="signup-input"
                    type="email" 
                    value={email}
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <input className="signup-input"
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />

                <p>
                <input 
                    type="checkbox"
                    checked={newsletter}
                    onChange={() => {
                        setNewsletter(!newsletter);
                    }}
                /><span> S'inscrire à notre newsletter</span>
                </p>

                <button type="Submit" className="button-register">S'inscrire</button>
            </form>
            <Link to="/login" className="nodecoration"><p>Tu as déjà un compte ? Connecte-toi !</p></Link>
        </div>

    );
};

export default Signup;

