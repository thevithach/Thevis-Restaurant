import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  const stripePromise = loadStripe(
    "pk_test_51O9wE0I1b2IdnTWddr1omvh5vLpLDHyHiaH9dZoBerSAccEIjnMe0AnUytsQwt2zxJJoqSrkEpj88a6KcwFu3IWv007qQwlknJ"
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  console.log(apiResult);
  console.log(userInput);

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
}

export default Payment;
