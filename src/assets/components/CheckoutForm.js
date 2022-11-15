import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const CheckoutForm = ({title, price}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [completed, setCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const userId = Cookies.get("userid");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const cardElement = elements.getElement(CardElement);

            const stripeResponse = await stripe.createToken(cardElement, {
                name: userId,
            });
            
            const stripeToken = stripeResponse.token.id;
            
            //https://lereacteur-vinted-api.herokuapp.com/payment
            // https://site--backend-vinted--4pswvlk4zjzj.code.run/payment
            const response = await axios.post("https://site--backend-vinted--4pswvlk4zjzj.code.run/payment", {
                token: stripeToken,
                title: title,
                amount: price
            });
            if (response.data === "succeeded") {
                setIsLoading(false);
                setCompleted(true);
            } else {
                alert("Une erreur est survenue");
            }
            //console.log(response.data);
                        
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="payment">
            <h2>Résumé de la commande</h2>
            <div className="payment-details">
                <span>Commande</span><span>{price} €</span>
            </div>
            <div className="payment-details">
                <span>Frais protection acheteurs</span><span>0.40 €</span>
            </div>
            <div className="payment-details">
                <span>Frais de port</span><span>0.80 €</span>
            </div>
            <div className="payment-total">
                <span>Total</span><span>{(price + 0.40 + 0.80).toFixed(2)} €</span>
            </div>
            <p className="payment-description">Il ne vous reste plus qu'un étape pour vous offrir <span className="bold">{title}</span> 😍. Vous allez payer <span className="bold">{(price + 0.40 + 0.80).toFixed(2)} €</span> (frais de protection et frais de port inclus).</p>
            <form onSubmit={handleSubmit}>
                <CardElement className="payment-card" />
                {isLoading ? (
                    <p>Loading...</p>
                ) : completed ? (
                    <p>Paiement effectué</p>
                ) : (
                    <button className="payment-button" type="submit">Payer</button>
                )}
            </form>
        </div>
    );
};

export default CheckoutForm;