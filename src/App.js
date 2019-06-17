import React, { Component } from "react";
import {Title,Center,SubSectionTitle,SectionIntro,SectionTitle,SubTitle,ImagesList,ExperienceTitle,Date,Content} from "./CssComponents.js"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
  <body>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <Title> Hi, I'm Guillaume</Title>
          <Center>
            I'm thrilled by the opportunity to learn. I'm a
            <SubTitle className="hvr-sweep-to-right">
              {" "}
              <AnchorLink offset='80' href="#engineer">Software engineer</AnchorLink>
          
            </SubTitle>
            interested in web development, machine learning and big-data.{" "}
            <br />
            I'm also a
            <SubTitle className="hvr-sweep-to-right">
              {" "}
              <AnchorLink offset='80' href="#graphic">Graphic design enthusiast </AnchorLink >
            </SubTitle>
          </Center>
        </div>
      </div>
    </section>
    <Soft />
    <Graphic />
  </body>
);
class App extends Component {
  render() {
  return(<SmoothScroll/>)
  }
}

class Soft extends Component {
  render() {
    return (
      <section className="section">
        <div class="container">
          
          <SectionTitle id="engineer">Software engineer</SectionTitle>
          <SectionIntro>
            Cupidatat amet mollit ex elit pariatur fugiat.
          </SectionIntro>
          <div class="columns" >
          <div class="column" >

          <SubSectionTitle>About Me</SubSectionTitle>
          <ImagesList>              <img
                src={process.env.PUBLIC_URL + "/py_logo.svg"}
                alt="Monkey face"
                style={{ padding: "0.5rem", width: "auto", height: "70px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/C_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "70px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/js_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "70px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/linux_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "70px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/Matlab_Logo.png"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "70px" }}
              />
              </ImagesList>
          </div>
          <div class="column" >
          <SubSectionTitle>Experiences</SubSectionTitle>
          <div class="timeline">
          <Experience
            title="Test"
            text="Incididunt commodo ut ex officia fugiat elit exercitation cupidatat aliqua deserunt deserunt laboris officia."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            text="Reprehenderit laborum nostrud non aliqua excepteur."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            text="Eiusmod dolor tempor aute pariatur culpa elit commodo."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
            date="01/02/03 - 01/02/03"
          />
          </div>
          <SubSectionTitle>Projects</SubSectionTitle>
          <Experience
            title="Test"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
            date="01/02/03 - 01/02/03"
          />
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
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
            <div class="timeline-content">
              <ExperienceTitle className="has-text-primary">
                {this.props.title}
              </ExperienceTitle>
              <Date>{this.props.date}</Date>
              <Content>{this.props.text}</Content>
            </div>
            </div>

          </div>);
     
  }
}

class Graphic extends Component {
  render() {
    return (
      <section className="section">
        <div class="container">
          <SectionTitle id="graphic">Graphic design </SectionTitle>
          <SectionIntro>
            Proident anim occaecat dolor deserunt ullamco duis dolore Lorem
            incididunt nostrud velit.
          </SectionIntro>
          <SubSectionTitle>Photos</SubSectionTitle>
          <SubSectionTitle>Posters</SubSectionTitle>
          <SubSectionTitle>3D</SubSectionTitle>
        </div>
      </section>
    );
  }
}


export default App;
