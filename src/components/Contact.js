import React, { Component } from "react";
import {
  SectionIntro,
  SectionTitle,
  Link,
  Input,
  TextArea
} from "./CssComponents";

class Contact extends Component {
  constructor(props) {
    super(props);
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
    } else if (this.title.getBoundingClientRect().y < -100 || this.title.getBoundingClientRect().y > window.outerHeight + 30) { // no more visibile on screen
      this.title.style.animation = ""
    }
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle ref={this.titleRef} id="contact">Contact</SectionTitle>

          <SectionIntro>
            You want to work with me, use one of my posters or just want to chat
            ?
            <br />
            Use the following form, or send me a message through{" "}
            <Link
              className="underline"
              href="https://www.linkedin.com/in/guillaumetecher/"
            >
              Linkedin
            </Link>,{" "}
            I'd be happy to hear from you !
            <br />
            <br />
            <form>
              <div className="columns">
                <div className="column is-half">
                  <div className="field">
                    <label className="label is-size-5">Name</label>
                    <div className="control">
                      <Input placeholder="Your name" />
                    </div>
                  </div>
                </div>

                <div className="column is-half">
                  <div className="field">
                    <label className="label is-size-5">E-Mail</label>
                    <div className="control">
                      <Input placeholder="Your e-mail" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label is-size-5">Message</label>
                <div className="control">
                  <TextArea placeholder="Say what you want ! " />
                </div>
              </div>
              <div className="control">
                <button className="button is-primary is-medium">Submit</button>
              </div>
            </form>
          </SectionIntro>
        </div>
      </section>
    );
  }
}

export default Contact;
