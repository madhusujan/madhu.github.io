import React, { Component } from "react";

const Landingpage = props => {
  return (
    <div>
      <div className="overlay" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div className="slider-text-inner js-fullheight">
              <div className="desc">
                <h1>
                  {props.text} <br />
                  {props.text1}
                </h1>
                <p>
                  <a
                    className="btn btn-primary btn-learn"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.url_text}
                    <i className={props.icon} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
