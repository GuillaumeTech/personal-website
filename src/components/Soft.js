import React, { Component } from "react";
import {
  SectionIntro,
  SectionTitle,
  ExperienceTitle,
  Date,
  Content,
  Link
} from "./CssComponents.js";

class Soft extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
    this.handleScroll = this.handleScroll.bind(this)
    this.title = null
    this.titleRef = element => {
      this.title = element;
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.title.getBoundingClientRect().y < 150 && this.title.getBoundingClientRect().y > 70) { // on top of the screen
      this.title.style.animationPlayState = "running"
      setTimeout(() => this.title.style.animation = "none", 500)
    } else if (this.title.getBoundingClientRect().y < -100 || this.title.getBoundingClientRect().y > window.outerHeight - 100) { // no more visibile on screen
      this.title.style.animation = ""
    }
  }



  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="engineer" ref={this.titleRef}>Software engineer</SectionTitle>
          <div className="columns is-vcentered">
            <div className="column">
              <SectionIntro>
                <br />
                I'm someone curious that is motivated by the idea of learning
                  new things and putting them into practice. <br />I’m interested in
web development and design.
                <br />
                <br />
                You can find my full resume{" "}
                <Link
                  className="underline"
                  href={process.env.PUBLIC_URL + "resume_GuillaumeTECHER.pdf"}
                >
                  here
                </Link>
                {"\u00A0"}
              </SectionIntro>
            </div>
            <div className="column">
              <div className="timeline">
                <Experience
                  title="IBM"
                  text="Fullstack developper"
                  date="03/2019 - 09/2019"
                />
                <Experience
                  title="ARC"
                  text="Fullstack developper"
                  date="07/2018 - 08/2018"
                />
                <Experience
                  title="ESEO/Davidson"
                  text="Projet manager (educational purpose)"
                  date="02/2018 - 06/2018"
                />
                <Experience
                  title="ARM"
                  text="Performance analysis engineer"
                  date="07/2017 - 10/2017"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="timeline-block timeline-block-right">
          <div className="marker" />
          <div className="timeline-content">
            <ExperienceTitle>{this.props.title}</ExperienceTitle>
            <Date>{this.props.date}</Date>
            <Content>{this.props.text}</Content>
          </div>
        </div>
      </div>
    );
  }
}

export default Soft;
