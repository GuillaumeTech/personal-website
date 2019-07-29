import React, { Component } from "react";
import {
  Title,
  Center,
  SubSectionTitle,
  SectionIntro,
  SectionTitle,
  SubTitle,
  ExperienceTitle,
  Date,
  Content,
  Link
} from "./components/CssComponents.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Contact from "./components/Contact"
import Graphic from "./components/Graphic"
import Soft from "./components/Soft"

const SmoothScroll = () => (
  <ParallaxProvider>
    <ThemeProvider theme={theme}>
      <body className="has-background-light">
        <section className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container">
              <Title>Hi, I'm Guillaume</Title>
              <Center>
                <SubTitle>
                  <AnchorLink offset="80" href="#engineer">
                    <Link className="hvr-sweep-to-right">
                      Software engineer
                    </Link>
                  </AnchorLink>
                  {""} and {""}
                  <AnchorLink offset="80" href="#graphic">
                    <Link className="hvr-sweep-to-right">
                      Graphic design enthusiast
                    </Link>
                  </AnchorLink>
                </SubTitle>

                <img
                  src={process.env.PUBLIC_URL + "/personal.svg"}
                  alt="personal logo"
                  style={{
                    paddingTop: "1.5rem",
                    width: "auto",
                    height: "70px"
                  }}
                />
              </Center>
            </div>
          </div>
        </section>
        <Soft />
        <Graphic />
        <Contact />
      </body>
    </ThemeProvider>
  </ParallaxProvider>
);

class App extends Component {
  render() {
    return <SmoothScroll />;
  }
}



export default App;
