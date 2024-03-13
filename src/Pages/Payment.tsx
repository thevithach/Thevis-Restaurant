import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
import { OrderSummary } from "../Components/Page/Order";
function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();
  console.log(apiResult);
  console.log(userInput);

  const stripePromise = loadStripe(
    "pk_test_51O9wE0I1b2IdnTWddr1omvh5vLpLDHyHiaH9dZoBerSAccEIjnMe0AnUytsQwt2zxJJoqSrkEpj88a6KcwFu3IWv007qQwlknJ"
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-md-7">
            <OrderSummary data={apiResult} userInput={userInput} />
          </div>
          <div className="col-md-5">
            {" "}
            <PaymentForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Payment;
