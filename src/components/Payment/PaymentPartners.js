import React from "react";
import creditcard from 'assets/creditc-removebg-preview.png'
import mpesa from 'assets/mpesa-removebg-preview.png'
import YelloRoundButton from "components/Buttons/YelloRoundButton";
import '../Payment/PaymentPartners.css'

function PaymentPartners() {

  const buttonStyle = {
    padding: '5px 1.5rem',
    borderRadius: '50px',
    // margin: '.5rem auto',
    margin:'0 auto',
    fontWeight: 'bold',
    minWidth: '130px',
    width:'40%',  
    color:"purple",
    marginLeft:"3em",
    backgroundColor:'orange'
  }

  // dotted line style
  const vLine={
    position:'absolute',
    borderLeft:'2px dotted black',
    left:'50%',
    height:'750px'
  }

  return (
    <div className="d-md-flex color-primary ml-0" >
      <div className="col-md-6 mb-5">
        <div className="d-flex flex-column align-items-left" style={{marginTop:"-3em"}}>
          <img src={creditcard} alt="mpesa" className=" mb-5" style={{height:"auto", width:"80%", maxWidth:"40em"}} />
          <form style={{marginTop:"-5em", color:"purple", marginLeft:"0"}}>
            <legend className="mb-3 font-weight-bold capitalize">
              credit card info
            </legend>
            <div className="mb-3">
              <label className="d-block small uppercase" for="card_number">
                card number
              </label>
              <input type="text" id="card_number" name="card_number" placeholder="XXXX XXXX XXXX XXXX" style={{width:"50%"}}/>
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="card_holder_name">
                card holder's name
              </label>
              <input
                type="text"
                id="card_holder_name"
                name="card_holder_name"
                style={{width:"70%"}}
              />
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="expire_date">
                expire date
              </label>
              <input type="date" id="expire_date" name="expire_date" style={{width:"70%"}}/>
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="cw">
                cw
              </label>
              <input type="number" id="cw" name="cw" style={{width:"40%"}}/>
            </div>
            <div className="d-flex mb-0" style={{textAlign:"center"}}>
              <YelloRoundButton text="submit" style={{width:"50%", backgroundColor:"red"}}/>
            </div>
          </form>
        </div>
      </div>

      <div className="vertical-line" style={vLine}>

      </div>
      <div className="col-md-6 mb-5 mt-4">
        <div className="d-flex flex-column align-items-center mpesa-payment">
          <img src={mpesa} alt="membesa" className=" mb-5" style={{height:"auto", width:"80%", maxWidth:"40em"}}/>
          <form style={{color:"purple"}}>
            <div className=" mb-5 mt-3">
              <label for="phone_number" className="d-block small phone-label">
                PHONE NUMBER
              </label>
              <input type="text" id="phone_number" name="phone_number" style={{width:"100%"}} className="number-input"/>
            </div>
            <div className="d-flex flex-column mobile-payment" style={{textAlign:"center"}}>
              {/* <YelloRoundButton text="submit" />  */}
              <button style={buttonStyle} className="mpesa-button"> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPartners;
