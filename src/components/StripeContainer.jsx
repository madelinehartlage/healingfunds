import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@chakra-ui/react";


export default function StripeContainer() {

    const [stripeError, setStripeError] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);

    const item = {
        price: "price_1NKEgqHHKZKLjgUhdOUeirI9",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `http://healing-funds.com/success`,
        cancelUrl: `http://healing-funds.com`
    };

    const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");

        const stripe = await loadStripe('pk_test_51NIz75HHKZKLjgUh4KjmjgLSTlqllf4d1YPPnT2PErPYU47sdbwrcjM9neeWkCRCU0T1Q4gTsnNzwdHYLgtPg1R2003z18DoxI');
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);


    return (
        <Button border="1px solid black" bgColor="#439298" color="white" borderRadius="0%" paddingRight={6} paddingLeft={6} paddingTop={4} paddingBottom={4} onClick={redirectToCheckout} disabled={isLoading}>DONATE NOW</Button>
    );
}