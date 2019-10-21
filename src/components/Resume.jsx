import React from "react";

const Resume = props => {
  return (
    <div>
      <section className="colorlib-resume" data-section="resume">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p>
                <a
                  href="https://docs.google.com/document/d/1o1ug92MNgOK2caDb_ltCJcVspx6x62_K/edit"
                  className="btn btn-primary btn-lg btn-load-more"
                  target="_blank"
                >
                  Click to View Res <i className="icon-download4" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
