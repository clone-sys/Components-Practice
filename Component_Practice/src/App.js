import React, { Component } from "react";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Main from "./components/Main.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Resume from "./components/Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
