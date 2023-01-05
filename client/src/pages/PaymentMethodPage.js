import React from "react";
import ProgressBar from "../components/ProgressBar";
import Wrapper from "../wrapper/PaymentMethodPage";

function PaymentMethodPage() {
  return (
    <Wrapper>
      <div className="main">
        <ProgressBar paymentMethod shipping />
        <div className="body">
          <h1>payment method</h1>
          <div className="select-method">
            <p className="title">select method</p>
            <input type="radio" name="paypal" id="paypal" checked />
            <label htmlFor="paypal">PayPal or Credit Card</label>
          </div>
          <div className="btn">
            <button>continue</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PaymentMethodPage;
