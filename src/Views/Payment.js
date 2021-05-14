import YelloRoundButton from "components/Buttons/YelloRoundButton";
import AppLayout from "components/Layouts/AppLayout";
import PaymentCard from "components/Payment/PaymentCard";

import PaymentPartners from "components/Payment/PaymentPartners";
import PaymentTableComponent from "components/Payment/PaymentTableComponent";
import React from "react";

function Payment() {
  return (
    <AppLayout>
      <main>
        <div className="container ">
          <div style={{ padding: "100px 0 50px 0", marginTop:"5em" }}>
            <h1 className="color-primary text-center" style={{color:"purple"}}>CART</h1>
          </div>
          <div className="cards row justify-content-around">
            <PaymentCard
              bgr="red"
              bgl="red"
              btnTextColor="white"
              week="1 week"
              btnWidth="50%"
              btnText="Select"
              price="800"
            />
            <PaymentCard
              bgr="green"
              bgl="green"
              btnTextColor="white"
              week="2 week"
              btnWidth="50%"
              btnText="Select"
              price="2,500"
            />
            <PaymentCard
              bgr="orange"
              bgl="orange"
              btnTextColor="white"
              week="4 week"
              btnWidth="50%"
              btnText="Select"
              price="4,000"
            />
          </div>
          <PaymentTableComponent />
          
          <PaymentPartners />
        </div>
      </main>
    </AppLayout>
  );
}

export default Payment;
