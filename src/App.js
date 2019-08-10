import React, { Component } from "react";
import {
  Title,
  Center,
  Link,
  SubTitle,

} from "./components/CssComponents.js";
import AnchorLink from "react-anchor-link-smooth-scroll";

import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Contact from "./components/Contact"
import Graphic from "./components/Graphic"
import Soft from "./components/Soft"
import Footer from "./components/Footer"
import MenuBar from "./components/MenuBar"
import Projects from "./components/Projects"



const SmoothScroll = () => (
  <ThemeProvider theme={theme}>
    <body className="has-background-light">

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <MenuBar />
            <Title>Hi, I'm Guillaume</Title>
            <Center>
              <SubTitle>
                <AnchorLink offset="80" href="#engineer">
                  <Link className="underline">
                    Software engineer
                    </Link>
                </AnchorLink>
                {" "}&amp;{" "}
                <AnchorLink offset="80" href="#graphic">
                  <Link className="underline">
                    Graphic design enthusiast
                    </Link>
                </AnchorLink>
                <br />
                Checkout my{" "}
                <AnchorLink offset="80" href="#projects">
                  <Link className="underline">
                    projects
                    </Link>
                </AnchorLink> and maybe <AnchorLink offset="80" href="#contact">
                  <Link className="underline">
                    contact me
                    </Link>
                </AnchorLink>
              </SubTitle>

              {/*<img
                src={process.env.PUBLIC_URL + "/personal.svg"}
                alt="personal logo"
                style={{
                  paddingTop: "1.5rem",
                  width: "auto",
                  height: "70px"
                }}
              />*/}
            </Center>

          </div>
        </div>
      </section>
      <Soft />
      <Graphic />
      <Projects />
      <Contact />
      <Footer />

    </body>

  </ThemeProvider>
);

class App extends Component {
  render() {
    return <SmoothScroll />;
  }
}



export default App;
