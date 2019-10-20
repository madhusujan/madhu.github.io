import React, { Component } from "react";
import Landingpage from "./sub-components/Landingpage";

class Introduction extends Component {
  render() {
    const slide1 = {
      text: "Namaste !",
      text1: "I'm Madhu",
      url:
        "https://docs.google.com/document/d/1o1ug92MNgOK2caDb_ltCJcVspx6x62_K/edit",
      url_text: "View Resume",
      icon: "icon-download4"
    };

    const slide2 = {
      text: "Learning Never Stops",
      text1: "I Love Building Things !! ",
      url: "https://github.com/madhusujan",
      url_text: "View Projects",
      icon: "icon-briefcase3"
    };
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/about.jpg)" }}>
                <Landingpage {...slide1} />
              </li>
              <li style={{ backgroundImage: "url(images/about.jpg)" }}>
                <Landingpage {...slide2} />
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;
