import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Offer = () => {
    const {id} = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   
        
    useEffect(()=>{
        const fetchData = async () => {        
            try {
                
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
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
        <div>
            
            <div className="background-grey">
                <div className="container offer-detail">
                    <img src={data.product_image.secure_url} alt="" />
                    <div className="offer-right">
                        <h2>{data.product_price} €</h2>
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Offer;