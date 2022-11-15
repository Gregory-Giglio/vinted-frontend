import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import CheckoutForm from "../assets/components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"); 


const Payment = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token");
    
    useEffect(()=>{
        
        if (!token){
            navigate("/login");
        }
    }, [navigate, token]);

    return (
                
        <div className="background-grey">
            <div className="container">
                <div className="payment">
                    <h1>Payment</h1>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;