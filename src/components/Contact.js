import React, { Component } from "react";
import {
  SectionIntro,
  SectionTitle,
  Link,
  Input,
  TextArea
} from "./CssComponents";

class Contact extends Component {
 

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="contact">Contact</SectionTitle>
            <div className="rectangle" />

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
