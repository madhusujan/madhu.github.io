import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/logo.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Madhu Sujan Paudel</a>
              </h1>
              <a
                className="active"
                href="mailto:madhu.sujan97@gmail.com?Subject=Hello%There"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-mail"></i> madhu.sujan97@gmail.com
              </a>
            </div>
            <nav id="colorlib-main-menu" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#resume" data-nav-section="resume">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="#contact" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Madhu Sujan Paudel © 2019. <br />
                  Made with <i className="icon-heart" aria-hidden="true" />
                  <br></br>
                  {/* Thanks freecodecamp(
                  <i className="icon-fire2" aria-hidden="true" />) */}
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
