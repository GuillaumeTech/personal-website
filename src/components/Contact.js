import React, { Component } from "react";
import { SectionIntro, SectionTitle, Link } from "./CssComponents";
import { Parallax } from "react-scroll-parallax";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="graphic">Contact</SectionTitle>
          <Parallax x={[100, -20]}>
            <div className="rectangle" />
          </Parallax>

          <SectionIntro>
            You want to work with me, use one of my poster or just want to chat
            ?
            <br />
            I'd be happy to hear from you !
            <br />
            <Link
              className="hvr-sweep-to-right"
              href="https://www.linkedin.com/in/guillaumetecher/"
            >
              Linkedin
            </Link>
          </SectionIntro>
        </div>
      </section>
    );
  }
}

export default Contact;
