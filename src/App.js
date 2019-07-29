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
} from "./CssComponents.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Masonry from "react-image-masonry";
import Img from "react-image";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

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

class Soft extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="engineer">Software engineer</SectionTitle>
          <Parallax x={[100, -20]}>
            <div className="rectangle" />
          </Parallax>

          <div className="columns is-vcentered">
            <div className="column">
              <SectionIntro>
                <br />
                I'm someone curious that is motivated by the idea of learning
                new things and putting them into practice. I’m interested in web
                development and design.
                <br />
                <br />
                You can find my full resume{" "}
                <Link
                  className="hvr-sweep-to-right"
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

class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posters: [
        {
          image: process.env.PUBLIC_URL + "image/lorem.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/poster.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/paf.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/paf.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/def.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/def.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/sunset.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/sunset.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/dj.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/dj.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/jump.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/poster.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/electro.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/poster.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/toit.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/toit.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/mont.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/mont.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/statue.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/statue.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/porte.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/porte.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/uku.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/uku.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/run.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/run.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/gala.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/poster.jpg"
        },
        {
          image: process.env.PUBLIC_URL + "image/stage.jpg",
          placeholder: process.env.PUBLIC_URL + "image/placeholder/poster.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="graphic">Graphic design </SectionTitle>
          <Parallax x={[100, -20]}>
            <div className="rectangle" />
          </Parallax>

          <SectionIntro>
            I do graphic design, photography and some 3D on my free time, I was
            also involved in various non-profit organisation and did posters
            during my time with them. You can find all my photos on{" "}
            <Link
              className="hvr-sweep-to-right"
              href="https://unsplash.com/@guillaume_t"
            >
              Unsplash
            </Link>
            {"\u00A0"}
            you can also follow me on{" "}
            <Link
              className="hvr-sweep-to-right"
              href="https://www.instagram.com/guillaume_tech/"
            >
              Instagram
            </Link>
            <br />
            <br />
            Here are some of my realisations I'm the most proud of !
          </SectionIntro>
          <Masonry numCols={2}>
            {this.state.posters.map(img => (
              <div className="image">
                <Img src={img.image} loader={<img src={img.placeholder} />} />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    );
  }
}

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

export default App;
