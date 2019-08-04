import React, { Component } from "react";
import Masonry from "react-image-masonry";
import Img from "react-image";
import { Parallax } from "react-scroll-parallax";
import { SectionIntro, SectionTitle, Link } from "./CssComponents.js";

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
            during my time with them.<br /> You can find all my photos on{" "}
            <Link
              className="underline"
              href="https://unsplash.com/@guillaume_t"
            >
              Unsplash
            </Link>
            ,{"\u00A0"}
             you can also follow me on{" "}
            <Link
              className="underline"
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
                <Img src={img.image} loader={<img src={img.placeholder} alt='' />} />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    );
  }
}

export default Graphic;
