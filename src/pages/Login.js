import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Login = ({handleToken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    return (
        <div className="container login">
            <h1>Se connecter</h1>
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
                            navigate("/");
                        }
                    } catch (error) {
                        console.error(error.response.data);
                    }
                }}
            >
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(event) =>{
                        setEmail(event.target.value);
                    }}
                />
                <input 
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(event) =>{
                        setPassword(event.target.value);
                    }}
                />
                <button type="Submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;