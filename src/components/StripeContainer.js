import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import {PaymentElement} from "@stripe/react-stripe-js";

const PUBLIC_KEY = "pk_test_51NIz75HHKZKLjgUhTKF26sSVR9IKVhwF4V1y7BaPAGKskNj3lG6Xakf4Btk6jHEpF8YQxCOuXCB61DG0jAAOw39I00AR2lnL8B";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />

        </Elements>
    );
}