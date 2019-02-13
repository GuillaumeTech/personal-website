import React, { Component } from "react";
import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 5rem;
  color: White;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
`;

const Date = styled.p`
  font-size: 0.8rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
`;

const ExperienceTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Center = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const SubTitle = styled.div`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  border-style: solid;
  border-width: 0.3rem;
  font-size: 2rem;
  color: White;
`;

const SectionIntro = styled.p`
  font-size: 1.2rem;
`;

const SectionTitle = styled(SubTitle)`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: hsl(236, 51%, 36%);
`;

const SubSectionTitle = styled.div`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: hsl(236, 51%, 36%);
  border-bottom: 0.2rem solid;
  font-size: 1.5rem;
`;

const ImagesList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
class App extends Component {
  render() {
    return (
      <body>
        <section class="hero is-primary is-fullheight">
          <div class="hero-body">
            <div class="container">
              <Title> Hi, I'm Guillaume</Title>
              <Center>
                I'm thrilled by the opportunity to learn. I'm a
                <SubTitle className="hvr-sweep-to-right">
                  {" "}
                  <a href="#engineer">Software engineer</a>{" "}
                </SubTitle>
                interested in web development, machine learning and android.{" "}
                <br />
                I'm also a
                <SubTitle className="hvr-sweep-to-right">
                  {" "}
                  <a href="#graphic">Graphic design enthusiast </a>
                </SubTitle>
              </Center>
            </div>
          </div>
        </section>
        <Soft />
        <Graphic />
      </body>
    );
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
          <SubSectionTitle>Technologies</SubSectionTitle>
          <ImagesList>              <img
                src={process.env.PUBLIC_URL + "/py_logo.svg"}
                alt="Monkey face"
                style={{ padding: "0.5rem", width: "auto", height: "150px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/C_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "150px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/js_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "150px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/linux_logo.svg"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "150px" }}
              />
              <img
                src={process.env.PUBLIC_URL + "/Matlab_Logo.png"}
                alt="Monkey face"
                style={{  padding: "0.5rem", width: "auto", height: "150px" }}
              />
              </ImagesList>

          <SubSectionTitle>Experiences</SubSectionTitle>
          <Experience
            title="Test"
            image="https://bulma.io/images/placeholders/128x128.png"
            text="Incididunt commodo ut ex officia fugiat elit exercitation cupidatat aliqua deserunt deserunt laboris officia."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            image="https://bulma.io/images/placeholders/128x128.png"
            text="Reprehenderit laborum nostrud non aliqua excepteur."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            image="https://bulma.io/images/placeholders/128x128.png"
            text="Eiusmod dolor tempor aute pariatur culpa elit commodo."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="Test"
            image="https://bulma.io/images/placeholders/128x128.png"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
            date="01/02/03 - 01/02/03"
          />
          <SubSectionTitle>Projects</SubSectionTitle>
          <Experience
            title="Test"
            image="https://bulma.io/images/placeholders/128x128.png"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
            date="01/02/03 - 01/02/03"
          />
        </div>
      </section>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-narrow ">
          <figure class="image is-128x128">
            <img src={this.props.image} />
          </figure>
        </div>
        <div className="column">
          <ExperienceTitle className="has-text-primary">
            {this.props.title}
          </ExperienceTitle>
          <Date>{this.props.date}</Date>
          <Content>{this.props.text}</Content>
        </div>
      </div>
    );
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


class Galery extends Component{
  render() {
    return (<p>test</p>{this.state.contents.map((element, index) => ())};
  }
}

export default App;
