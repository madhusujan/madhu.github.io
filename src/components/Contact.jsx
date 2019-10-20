import React from "react";

const Contact = props => {
  return (
    <div>
      <section id="colorlib-contact" data-section="contact">
        <div
          className="colorlib-narrow-content animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="row">
            <span className="heading-meta">How to Contact?</span>
            <h4 className="colorlib-heading">Let's be friends </h4>
            <div className="col-md-2 text-center">
              <a
                href="https://www.facebook.com/madhusujan97"
                class="fa fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-md-2  text-center" text-cente>
              <a
                href="https://twitter.com/madhu_sujan"
                class="fa fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-md-2 text-center">
              <a
                href="https://www.linkedin.com/in/madhu-paudel-305b2b14a/"
                class="fa fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-md-2 text-center">
              <a
                href="https://www.instagram.com/madhu_sujan/"
                class="fa fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-md-2 text-center">
              <a
                href="https://www.github.com/madhusujan/"
                class="fa fa-github"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
