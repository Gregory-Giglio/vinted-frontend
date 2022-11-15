import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {

    // const stripe = useStripe();
    // const elements = useElements();
    // const [completed, setCompleted] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);

    //     try {
    //         const cardElement = elements.getElement(CardElement);

    //         const stripeResponse = await stripe.createToken(cardElement, {
    //             name: "12265856484848948418",
    //         });
            
    //         const stripeToken = stripeResponse.token.id;
            
    //         const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/payment", {
    //             token: stripeToken,
    //             title: "Le Titre de l'annonce",
    //             amount: 10
    //         });
    //         if (response.data === "succeeded") {
    //             setIsLoading(false);
    //             setCompleted(true);
    //         } else {
    //             alert("Une erreur est survenue");
    //         }
    //         console.log(response.data);
                        
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // };

    return (
        <div></div>
        // <form onSubmit={handleSubmit}>
        //     <CardElement />
        //     {isLoading ? (
        //         <p>Loading...</p>
        //     ) : completed ? (
        //         <p>Paiement effectué</p>
        //     ) : (
        //         <button type="submit">Payer</button>
        //     )}
        // </form>
    );
};

export default CheckoutForm;