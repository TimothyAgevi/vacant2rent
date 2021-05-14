import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login/views/Login'
import Register from './Register/views/Register'
import PaymentForm from "./Views/Payment";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import Pricing from "./Pricingplan/Pricing";
import Contact from './Contact/Contact'
import Blog from './Views/Blog'
import Details from './Search/pages/Details/index'
import Home from './Search/pages/Home/index'
// import SearchProperties from './Views/SearchProperties'
import AddLists from './Views/AddLists'
import ViewProperty from './V2Rcode/ViewProperty'
import LandingPage from './Views/LandingPage'
// import HomePage from "Views/HomePage";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route exact path='/' component={HomePage} /> */}
      <Route exact component={LandingPage} path="/"/>
      <Route exact component={Login} path='/login'/>
      <Route exact component={Register} path='/register'/>
      <Route  exact component={PaymentForm} path='/pay'/>
      <Route exact component={Pricing} path='/pricing'/>
      <Route exact component={Home} path='/search_property'/>
      <Route exact component={Blog} path='/blog'/>
       <Route exact component={Contact} path='/contact'/>
       <Route exact component={Details} path='/search_property/:propertyId'/>
       <Route exact component={AddLists} path='/list_property'/>
       
       <Route exact component={ViewProperty} path='/view_property'/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
