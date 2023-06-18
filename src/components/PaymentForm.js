import React, {useState} from "react";
import {  CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export default function PaymentForm() {
    const [success, setSuccess] = React.useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    

        if (!error) {
            try  {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ? 
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <CardElement></CardElement>
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
            :
            <div>
                <h2>You just bought a spatula!</h2>
            </div>
            }
        </>
    );
}
