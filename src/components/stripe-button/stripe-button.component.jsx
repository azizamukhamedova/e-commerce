import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I1nZyJvihb0n1PWrV0ehnfdWCNDe1edPittmeZWuE1G2T6tX4YOn4GEfVNoiWBYyzgeZdUpCYAIfpym5R1qhZvg00n7BkyQX9";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothing Ltd"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      image="https://sendeyo.com/up/d/f3eb2117da"
    />
  );
};

export default StripeCheckoutButton;
