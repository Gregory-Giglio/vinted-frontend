import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import CheckoutForm from "../assets/components/CheckoutForm";
import { useLocation } from "react-router-dom";

//clé du Réacteur pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP
//Ma clé pk_test_51M4PCGBDncfis75khZs0Bs8oTgwDKHKbCDgWGYIMCPN8wRGlc0mu96mMpi2SylH1xQcNt8DSInkCVqO7YOLFmajI00X8Z9ACfe
const stripePromise = loadStripe("pk_test_51M4PCGBDncfis75khZs0Bs8oTgwDKHKbCDgWGYIMCPN8wRGlc0mu96mMpi2SylH1xQcNt8DSInkCVqO7YOLFmajI00X8Z9ACfe");


const Payment = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token");
    const location = useLocation();
    const { title, price } = location.state;

       
    useEffect(()=>{
        
        if (!token){
            navigate("/login");
        }
    }, [navigate, token]);

    return (
                
        <div className="background-grey">
            <div className="container">
                <Elements stripe={stripePromise}>
                    <CheckoutForm title={title} price={price}/>
                </Elements>
            </div>
        </div>
        
    );
};

export default Payment;