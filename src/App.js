import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import { Home } from "./Components/pages/Home";
import { LoginPage } from "./Components/pages/Login";
import { ProductPage } from "./Components/pages/Product";
import NavBar from "./Components/Navbar/index";
import { Service } from "./Components/pages/Service";
import { ProductDetails } from "./Components/pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
