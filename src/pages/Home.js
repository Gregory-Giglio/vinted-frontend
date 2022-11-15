import bannerimg from "../assets/img/banner-hero-vinted.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Offers from "../assets/components/Offers";


const Home = ({search}) => {
      const [data, setData] = useState({});
      const [isLoading, setIsLoading] = useState(true);

            
      useEffect(()=>{
            const fetchData = async () => {
                  // `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
                  // `https://site--backend-vinted--4pswvlk4zjzj.code.run/offers?title=${search}`
                  const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`);
                  setData(response.data);
                  setIsLoading(false);
            };
            fetchData();
            
      }, [search]);

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