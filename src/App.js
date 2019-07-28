import React, { Component } from "react";
import {Title,Center,SubSectionTitle,SectionIntro,SectionTitle,SubTitle,ImagesList,ExperienceTitle,Date,Content} from "./CssComponents.js"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ParallaxProvider,Parallax } from 'react-scroll-parallax';
import Masonry from 'react-image-masonry';
import Img from 'react-image'


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
            date="03/2019 - 09/2019"
          />
          <Experience
            title="ARC"
            text="Reprehenderit laborum nostrud non aliqua excepteur."
            date="07/2018 - 08/2018"
          />
          <Experience
            title="ESEO/Davidson"
            text="Eiusmod dolor tempor aute pariatur culpa elit commodo."
            date="02/2018 - 06/2018"
          />
          <Experience
            title="ARM"
            text="Tempor nostrud ea laboris veniam deserunt adipisicing magna minim sint ex occaecat."
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
      {
        image : process.env.PUBLIC_URL + 'image/lorem.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/poster.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/paf.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/paf.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/def.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/def.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/sunset.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/sunset.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/dj.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/dj.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/jump.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/poster.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/electro.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/poster.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/toit.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/toit.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/mont.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/mont.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/statue.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/statue.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/porte.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/porte.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/uku.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/uku.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/run.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/run.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/gala.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/poster.jpg'
      },
      {
        image : process.env.PUBLIC_URL + 'image/stage.jpg',
        placeholder : process.env.PUBLIC_URL + 'image/placeholder/poster.jpg'
      },
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
            I do graphic design, photography and some 3D on my free time, I was also involved in various non-profit organisation and did posters during my time with them. 
            
            
            You can find all my photos on <a className="hvr-sweep-to-right link" href='https://unsplash.com/@guillaume_t'>Unsplash</a>{'\u00A0'}
           you can also follow me on <a className="hvr-sweep-to-right link" href='https://www.instagram.com/guillaume_tech/'>Instagram</a>
           <br/><br/>Here are some of my realisations I'm the most proud of !
            
                

          </SectionIntro>
          <Masonry
                numCols={2}
               
            >
              {this.state.posters.map(img => <div className='image'><Img 
            src={img.image}
            loader={<img src={img.placeholder}/>} 
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
            <a className="hvr-sweep-to-right link" href='https://www.linkedin.com/in/guillaumetecher/'>Linkedin</a>
          </SectionIntro>
          
        </div>
      </section>
    );
  }
}


export default App;
