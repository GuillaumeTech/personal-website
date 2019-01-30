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
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Center = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const SubTitle = styled.div`
  padding-left: 0.3em;
  padding-right: 0.3em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  border-style: solid;
  border-width: 0.2em;
  font-size: 2rem;
  color: White;
`;

const SectionTitle = styled(SubTitle)`
  padding-left: 0.3em;
  padding-right: 0.3em;
  margin-top: 3rem ;
  margin-bottom: 2rem;
  color: hsl(236, 51%, 36%);
`;


class App extends Component {
  render() {
    return (
      <div>
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
        <Graphic/>
      </div>
    );
  }
}

class Soft extends Component {
  render() {
    return (
      <div class="container">
        <SectionTitle id="engineer">Software engineer</SectionTitle>
        <p>Magna occaecat labore incididunt ipsum elit ipsum et excepteur voluptate fugiat. Ipsum ullamco consectetur in anim cupidatat sunt culpa. Aliqua voluptate ullamco nisi commodo commodo ut aliqua consequat velit. Laboris laborum quis mollit tempor amet fugiat quis amet velit laborum eiusmod elit cupidatat. Dolore duis esse fugiat mollit pariatur amet nisi elit magna qui mollit proident eiusmod. Ad aliquip ipsum enim consequat deserunt pariatur. Incididunt est mollit reprehenderit ullamco duis.

Ad ea quis ad labore occaecat sit qui id nisi officia eiusmod. Nisi Lorem dolore nulla ex exercitation ad consequat quis consectetur excepteur. Reprehenderit laboris voluptate cillum aliqua quis anim id veniam ad labore fugiat id. Excepteur ad commodo deserunt eiusmod elit cupidatat. Ipsum consequat exercitation elit incididunt elit consectetur in fugiat ut anim est mollit cillum. Quis culpa exercitation labore do fugiat cillum exercitation. Lorem nisi ipsum laboris consectetur duis magna veniam sit nulla voluptate non duis.

In labore ea veniam Lorem exercitation cupidatat incididunt esse commodo sit. Dolore reprehenderit qui elit esse consequat. Elit eiusmod est laboris non minim magna quis consectetur in. Magna sit pariatur velit velit Lorem ut in consequat incididunt. Id enim mollit veniam ut voluptate aute. Proident excepteur ex labore in nostrud id amet et magna cillum consequat labore incididunt sint.

Anim dolore anim ex adipisicing id tempor amet veniam sint sit. Quis do quis magna do. Consequat enim eu aute culpa sunt officia. Culpa id non culpa consectetur excepteur qui. Nisi adipisicing ipsum non laboris excepteur Lorem cupidatat amet dolor irure cupidatat amet officia irure. Incididunt do excepteur cupidatat exercitation labore aliquip laborum aute.

Eiusmod non duis voluptate magna. Duis in et commodo sint. Incididunt deserunt anim velit qui qui aute id cupidatat. Qui mollit cillum commodo anim pariatur ipsum. Non sunt ipsum irure ex sint in.

Fugiat excepteur est cillum sint aliqua occaecat amet Lorem laboris. Aliquip duis irure nisi sunt eiusmod. Nisi sit eu deserunt quis nisi est amet aliquip. Enim consequat id duis mollit anim quis dolor officia mollit pariatur laboris et non Lorem. Fugiat anim occaecat minim nostrud elit reprehenderit incididunt ut. Laborum id aliquip aute dolore in ut in exercitation quis non labore labore magna exercitation.

Est ad nulla ex veniam cupidatat ea aute culpa anim labore irure deserunt non sit. Sint occaecat ex fugiat amet veniam fugiat ad sit ex consectetur. Exercitation duis irure anim cillum aliqua do laboris. Pariatur elit qui laboris qui quis mollit cillum anim ipsum reprehenderit quis. Ut officia nulla aliqua qui voluptate ut veniam eiusmod pariatur in veniam qui qui quis.</p>
      </div>
    );
  }
}
class Graphic extends Component {
  render() {
    return (
      <div class="container">
        <SectionTitle id="graphic">Graphic design </SectionTitle>
        <p>Magna occaecat labore incididunt ipsum elit ipsum et excepteur voluptate fugiat. Ipsum ullamco consectetur in anim cupidatat sunt culpa. Aliqua voluptate ullamco nisi commodo commodo ut aliqua consequat velit. Laboris laborum quis mollit tempor amet fugiat quis amet velit laborum eiusmod elit cupidatat. Dolore duis esse fugiat mollit pariatur amet nisi elit magna qui mollit proident eiusmod. Ad aliquip ipsum enim consequat deserunt pariatur. Incididunt est mollit reprehenderit ullamco duis.

Ad ea quis ad labore occaecat sit qui id nisi officia eiusmod. Nisi Lorem dolore nulla ex exercitation ad consequat quis consectetur excepteur. Reprehenderit laboris voluptate cillum aliqua quis anim id veniam ad labore fugiat id. Excepteur ad commodo deserunt eiusmod elit cupidatat. Ipsum consequat exercitation elit incididunt elit consectetur in fugiat ut anim est mollit cillum. Quis culpa exercitation labore do fugiat cillum exercitation. Lorem nisi ipsum laboris consectetur duis magna veniam sit nulla voluptate non duis.

In labore ea veniam Lorem exercitation cupidatat incididunt esse commodo sit. Dolore reprehenderit qui elit esse consequat. Elit eiusmod est laboris non minim magna quis consectetur in. Magna sit pariatur velit velit Lorem ut in consequat incididunt. Id enim mollit veniam ut voluptate aute. Proident excepteur ex labore in nostrud id amet et magna cillum consequat labore incididunt sint.

Anim dolore anim ex adipisicing id tempor amet veniam sint sit. Quis do quis magna do. Consequat enim eu aute culpa sunt officia. Culpa id non culpa consectetur excepteur qui. Nisi adipisicing ipsum non laboris excepteur Lorem cupidatat amet dolor irure cupidatat amet officia irure. Incididunt do excepteur cupidatat exercitation labore aliquip laborum aute.

Eiusmod non duis voluptate magna. Duis in et commodo sint. Incididunt deserunt anim velit qui qui aute id cupidatat. Qui mollit cillum commodo anim pariatur ipsum. Non sunt ipsum irure ex sint in.

Fugiat excepteur est cillum sint aliqua occaecat amet Lorem laboris. Aliquip duis irure nisi sunt eiusmod. Nisi sit eu deserunt quis nisi est amet aliquip. Enim consequat id duis mollit anim quis dolor officia mollit pariatur laboris et non Lorem. Fugiat anim occaecat minim nostrud elit reprehenderit incididunt ut. Laborum id aliquip aute dolore in ut in exercitation quis non labore labore magna exercitation.

Est ad nulla ex veniam cupidatat ea aute culpa anim labore irure deserunt non sit. Sint occaecat ex fugiat amet veniam fugiat ad sit ex consectetur. Exercitation duis irure anim cillum aliqua do laboris. Pariatur elit qui laboris qui quis mollit cillum anim ipsum reprehenderit quis. Ut officia nulla aliqua qui voluptate ut veniam eiusmod pariatur in veniam qui qui quis.</p>
     
      </div>
    );
  }
}

export default App;
