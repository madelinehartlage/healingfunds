import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import {PaymentElement} from "@stripe/react-stripe-js";

const PUBLIC_KEY = "pk_live_51NIz75HHKZKLjgUhGDgGlSQDNGEpzWSp3mEQ17rwPsaomNRFGiwxcXyNv82qChufyawj4VtwHutlt5UQ4TeflIKD00sA1vRyU4";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />

        </Elements>
    );
}