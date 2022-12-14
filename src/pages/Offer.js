import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Offer = () => {
    const {id} = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   
        
    useEffect(()=>{
        const fetchData = async () => {        
            try {
                // https://lereacteur-vinted-api.herokuapp.com/offer/${id}
                // https://site--backend-vinted--4pswvlk4zjzj.code.run/offer/${id}
                const response = await axios.get(`https://site--backend-vinted--4pswvlk4zjzj.code.run/offer/${id}`);
                setData(response.data);
                setIsLoading(false);
    
            } catch (error) {
                console.error(error.message);
            }
    
        };
        fetchData();
    }, [id]);
    

    return isLoading ?(
        <p>Chargement en cours...</p>
    ) : (
        <div className="background-grey">
            <div className="container">
                <div className="offer-detail">
                    <img src={data.product_image.secure_url} alt="" />
                    <div className="offer-right">
                        <h2>{data.product_price} €</h2>
                        <div className="offer-right-details">
                            {data.product_details.map((detail, index) => {
                                const objectKey = Object.keys(detail)[0];
                                return (
                                    <div key={index} className="offer-right-detail">
                                    {/* J'affiche la clé de l'objet */}
                                    <span className="color-grey">{objectKey} : </span>
                                    {/* J'affiche le contenu de la clé */}
                                    <span>{detail[objectKey]}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="offer-right-bottom">
                            <h3>{data.product_name}</h3>
                            <p className="color-grey">{data.product_description}</p>
                            <div className="offer-right-owner">                            
                                {data.owner.account.avatar && (
                                    <img
                                        src={data.owner.account.avatar.secure_url}
                                        alt="owner"
                                    />
                                )}                                    
                                <p>{data.owner.account.username}</p>                                    
                            </div>
                       </div>
                       <Link to="/payment" state={{ title: data.product_name, price: data.product_price}}><button className="offer-right-buy">Acheter</button></Link>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default Offer;