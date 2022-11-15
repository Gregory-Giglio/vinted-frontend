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
    const [price, setPrice] = useState();
    
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
          
        //   "https://lereacteur-vinted-api.herokuapp.com/offer/publish"
        // "https://site--backend-vinted--4pswvlk4zjzj.code.run/offer/publish"
          await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            formData,
            {
              headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          navigate("/");
                  
        } catch (error) {
          console.log(error.response.data.message);
        }
        }
      };

    return (
        
        <div className="background-grey">
            <div className="container">
                
                <form className="publish-form" onSubmit={handleSubmit}>
                <h1>Vends ton article</h1>
                <div className="publish-file">
                <input
                    type="file"
                    onChange={(event) => {
                        setPicture(event.target.files[0]);
                    }}
                />
                </div>
                <div className="background-white">
                <div className="publish-detail border-bottom-grey">
                    <span>Titre</span>
                    <input className="publish-input"
                        type="text"
                        value={title}
                        placeholder="ex: Chemise Sézane verte"
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="publish-detail">
                    <span>Décris ton article</span>
                    <textarea name="description" id="description" rows="5"
                    className="publish-input"
                    value={description}
                    placeholder="ex: porté quelquefois, taille correctement"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    ></textarea>
                </div>
                </div>
                <div className="background-white">
                <div className="publish-detail border-bottom-grey">
                    <span>Marque</span>
                    <input className="publish-input"
                        type="text"
                        placeholder="ex: Zara"
                        value={brand}
                        onChange={(event) => {
                            setBrand(event.target.value);
                        }}
                    />
                </div>
                <div className="publish-detail border-bottom-grey">
                    <span>Taille</span>
                    <input className="publish-input"
                        type="text"
                        value={size}
                        placeholder="ex: L / 40 / 12"
                        onChange={(event) => {
                            setSize(event.target.value);
                        }}
                    />
                </div>
                <div className="publish-detail border-bottom-grey">
                    <span>Couleur</span>
                    <input className="publish-input"
                        type="text"
                        value={color}
                        placeholder="ex: Fushia"
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />
                </div>
                <div className="publish-detail border-bottom-grey">
                    <span>Etat</span>
                    <input className="publish-input"
                        type="text"
                        value={condition}
                        placeholder="ex: Neuf avec étiquette"
                        onChange={(event) => {
                            setCondition(event.target.value);
                        }}
                    />
                </div>
                <div className="publish-detail">
                    <span>Lieu</span>
                    <input className="publish-input"
                        type="text"
                        value={city}
                        placeholder="ex: Paris"
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    />
                </div>
                </div>
                <div className="background-white">
                <div className="publish-detail">
                    <span>Prix</span>
                    <input className="publish-input"
                        type="text"
                        placeholder="0,00 €"
                        value={price}
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                </div>
                </div>
                <div className="publish-button">
                <button type="submit">Ajouter</button>
                </div>
                </form>
            </div>
        </div>
    );
};


export default Publish;