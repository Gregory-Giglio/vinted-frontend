import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Signup = ({handleToken}) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();
    
    return (
        <div className="container signup">
            <h1>S'inscrire</h1>
            <form
                className="signup"
                onSubmit={async (event) => {
                    event.preventDefault();
                    //requête
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
                        console.error(error.message);
                    }

                                        
                }}
            >
                <input
                    type="text" 
                    value={user}
                    placeholder="Nom d'utilisateur"
                    onChange={(event) => {
                        setUser(event.target.value);
                    }}
                />

                <input 
                    type="email" 
                    value={email}
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <input 
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />

                <input 
                    type="checkbox" 
                    value={newsletter}
                    onChange={(event) => {
                        setNewsletter(event.target.value);
                    }}
                />
                <span>S'inscrire à notre newsletter</span>

                <input type="Submit"/>
            </form>
        </div>

    );
};

export default Signup;

