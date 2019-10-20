import React, { Component } from "react";

const Skill = props => {
  return (
    <div className="col-md-4 text-center animate-box">
      <div className={props.color}>
        <span className="icon">
          <i className={props.icon} />
        </span>
        <div className="desc">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
