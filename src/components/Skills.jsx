import React, { Component } from "react";
import Skill from "./sub-components/Skill";

class Skills extends Component {
  render() {
    const skill = {
      color: "services color-1",
      icon: "icon-pencil",
      header: "Web Development",
      description:
        "I have experience building websites using JavaScript, React, HTML, CSS, PHP"
    };
    const skill1 = {
      color: "services color-2",
      icon: "icon-code",
      header: "Sofware Development",
      description:
        "Currently, I am interning at Tarifica as Software Engineering Intern. "
    };
    const skill2 = {
      color: "services color-3",
      icon: "icon-data",
      header: "Data Science",
      description:
        "I am taking an online IBM Data Science Certification course on Coursera. "
    };
    const skill4 = {
      color: "services color-4",
      icon: "icon-layers2",
      header: "Machine Learning",
      description:
        "I am starting to take online courses on Udemy, and Udacity to know about ML"
    };
    const skill3 = {
      color: "services color-5",
      icon: "icon-arrow-loop-outline",
      header: "Data Structures & Algorithms",
      description:
        " I have good concept of DSA due to CS coursework and Independent Study."
    };
    const skill5 = {
      color: "services color-6",
      icon: "icon-support",
      header: "General Skills",
      description:
        "Leadership position in clubs, and Resident Asistant helped my workplace skills."
    };
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <Skill {...skill} />
              <Skill {...skill1} />
              <Skill {...skill2} />
            </div>
            <div className="row row-pt-md">
              <Skill {...skill3} />
              <Skill {...skill4} />
              <Skill {...skill5} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
