import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Publish = () => {
    const navigate = useNavigate();    
    const [picture, setPicture] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState(0);
    
    const token = Cookies.get("token");
    
    useEffect(()=>{
        
        if (!token){
            navigate("/login");
        }
    }, [navigate, token]);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !price || !picture){
            alert("Titre, prix et photo obligatoires !");
        } else {
        try {
          const formData = new FormData();
          
          formData.append("picture", picture);
          formData.append("title", title);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("condition", condition);
          formData.append("city", city);
          formData.append("brand", brand);
          formData.append("size", size);
          formData.append("color", color);
          
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            formData,
            {
              headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

                  
        } catch (error) {
          console.log(error.response.data.message);
        }
        }
      };

    return (
        
        <div className="background-grey">
            <div className="container">
                <h1>Vends ton article</h1>
                <form className="publish-form" onSubmit={handleSubmit}>
                <input
                    type="file"
                    onChange={(event) => {
                        setPicture(event.target.files[0]);
                    }}
                />
                <div>
                    <span>Titre</span>
                    <input 
                        type="text"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Décris ton article</span>
                    <textarea name="description" id="description" rows="5"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    ></textarea>
                </div>
                <div>
                    <span>Marque</span>
                    <input 
                        type="text"
                        value={brand}
                        onChange={(event) => {
                            setBrand(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Taille</span>
                    <input 
                        type="text"
                        value={size}
                        onChange={(event) => {
                            setSize(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Couleur</span>
                    <input 
                        type="text"
                        value={color}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Etat</span>
                    <input 
                        type="text"
                        value={condition}
                        onChange={(event) => {
                            setCondition(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Lieu</span>
                    <input 
                        type="text"
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Prix</span>
                    <input 
                        type="text"
                        value={price}
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                </div>
                <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
};


export default Publish;