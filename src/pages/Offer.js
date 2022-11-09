import {useParams} from "react-router-dom";
import Header from "../assets/components/Header";
import {useState, useEffect} from "react";
import axios from "axios";

const Offer = () => {
    const {id} = useParams();

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

             
    const fetchData = async () => {
        
        try {
            const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
            setData(response.data);
            setIsLoading(false);

        } catch (error) {
            console.error(error.message);
        }

    };
    
    useEffect(()=>{
        fetchData();
    }, []);
    
    return isLoading ?(
        <p>Chargement en cours...</p>
    ) : (
        <div>
            <Header />
            <div className="container">
                <img src={data.product_image.secure_url} alt="" />
            </div>
            
        </div>

    );
};

export default Offer;