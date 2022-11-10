import bannerimg from "../assets/img/banner-hero-vinted.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Offers from "../assets/components/Offers";


const Home = () => {
      const [data, setData] = useState({});
      const [isLoading, setIsLoading] = useState(true);

      const fetchData = async () => {
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
            setData(response.data);
            setIsLoading(false);
      };
      
      useEffect(()=>{
            fetchData();
            
      }, []);

      return isLoading ? (
            <span>En cours de chargement...</span>
      ) : (
            <div>
                  
                  <div className='hero'>
                        <img src={bannerimg} alt="banner" />
                  </div>
                  <div className='container'>
                                               
                        <Offers offers={data.offers} />

                        
                  </div>
            </div>
      );
};

export default Home;