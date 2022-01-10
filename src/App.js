import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import NavBar from "./Components/Navbar";
import { Service } from "./Components/Service";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/service" component={Service} />
        <Route path="/about-us" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
