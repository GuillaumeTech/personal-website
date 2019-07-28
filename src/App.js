import React, { Component } from "react";
import {Title,Center,SubSectionTitle,SectionIntro,SectionTitle,SubTitle,ImagesList,ExperienceTitle,Date,Content} from "./CssComponents.js"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ParallaxProvider,Parallax } from 'react-scroll-parallax';
import Masonry from 'react-image-masonry';


const SmoothScroll = () => (
  <ParallaxProvider>
  <body className="has-background-light">
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container">
        <Title>Hi, I'm Guillaume</Title>
        <Center>
  
            <SubTitle className="hvr-sweep-to-right">
          
              <AnchorLink offset='80' href="#engineer">Software engineer</AnchorLink>
          
            </SubTitle>
            and {""}  
            <SubTitle className="hvr-sweep-to-right">
            
              <AnchorLink offset='80' href="#graphic">Graphic design enthusiast</AnchorLink >
            </SubTitle>
            <br/>
            <img
                src={process.env.PUBLIC_URL + "/personal.svg"}
                alt="Monkey face"
                style={{  paddingTop: "1.5rem", width: "auto", height: "70px" }}
              />
          </Center>
        </div>
      </div>
    </section>
    <Soft />
    <Graphic />
    <Contact />
  </body>
  </ParallaxProvider>
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
        <div className="container">
          
          <SectionTitle id="engineer">Software engineer</SectionTitle>
          <Parallax x={[100, -20]}><div className="rectangle"></div></Parallax>
          
          
          <div className="columns is-vcentered" >
          <div className="column" >
          <SectionIntro>
            <br></br>
            Cupidatat amet mollit ex elit pariatur fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </SectionIntro>
          </div>
          <div className="column">

          <div className="timeline">
          <Experience
            title="IBM"
            text="Incididunt commodo ut ex officia fugiat elit exercitation cupidatat aliqua deserunt deserunt laboris officia."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="ARC"
            text="Reprehenderit laborum nostrud non aliqua excepteur."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="ESEO/Davidson"
            text="Eiusmod dolor tempor aute pariatur culpa elit commodo."
            date="01/02/03 - 01/02/03"
          />
          <Experience
            title="ARM"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
            date="01/02/03 - 01/02/03"
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
          <div className="marker"></div>
            <div className="timeline-content">
              <ExperienceTitle className="has-text-black">
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
 
  constructor(props) {
    super(props);
    this.state = { 
      posters: 
      [
      process.env.PUBLIC_URL + 'image/lorem.jpg',
      process.env.PUBLIC_URL + 'image/paf.jpg',
      process.env.PUBLIC_URL + 'image/sunset.jpg',
      process.env.PUBLIC_URL + 'image/dj.jpg',
      process.env.PUBLIC_URL + 'image/jump.jpg',
      process.env.PUBLIC_URL + 'image/mountain.jpg',
      process.env.PUBLIC_URL + 'image/def.jpg',
      process.env.PUBLIC_URL + 'image/electro.jpg',
      process.env.PUBLIC_URL + 'image/toit.jpg',
      process.env.PUBLIC_URL + 'image/mont.jpg',
      process.env.PUBLIC_URL + 'image/statue.jpg',
      process.env.PUBLIC_URL + 'image/uku.jpg',
      process.env.PUBLIC_URL + 'image/porte.jpg',
      process.env.PUBLIC_URL + 'image/gala.jpg',
      process.env.PUBLIC_URL + 'image/stage.jpg',
      process.env.PUBLIC_URL + 'image/run.jpg',
      
      ]
     
  }
  }
  
  
  render() {
    return (
      <section className="section">
        <div className="container">
          <SectionTitle id="graphic">Graphic design </SectionTitle>
          <Parallax x={[100, -20]}><div className="rectangle"></div></Parallax>
          
          <SectionIntro>
            Proident anim occaecat dolor deserunt ullamco duis dolore Lorem
            incididunt nostrud velit.
          </SectionIntro>
          <Masonry
                numCols={2}
               
            >
              {this.state.posters.map(img => <div className='image'><img 
            src={img} 
               /></div>)}

                
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
          <Parallax x={[100, -20]}><div className="rectangle"></div></Parallax>
          
          <SectionIntro>
            Proident anim occaecat dolor deserunt ullamco duis dolore Lorem
            incididunt nostrud velit.
          </SectionIntro>

        </div>
      </section>
    );
  }
}


export default App;
