import React, { Component } from "react";
import Introduction from "./components/Introduction";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Skills />
            <Resume />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
