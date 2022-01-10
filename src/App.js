import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./Components/pages/About";
import { Contact } from "./Components/pages/Contact";
import { Home } from "./Components/pages/Home";
import { LoginPage } from "./Components/pages/Login";
import NavBar from "./Components/pages/Navbar";
import { Service } from "./Components/pages/Service";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
        <Route path="/service" component={Service} />
        <Route path="/about-us" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
