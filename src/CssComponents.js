import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  color:rgb(0,0,0);
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  animation: tracking-in-contract 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: 0.1s;
  white-space: nowrap;
`;

export const Date = styled.p`
  font-size: 0.8rem;
`;

export const Content = styled.p`
  font-size: 1.2rem;
`;

export const ExperienceTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Center = styled.div`
  text-align: left;
  color:rgb(0,0,0);
  font-size: 2rem;
  animation: reveal 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: 0.5s;
`;

export const SubTitle = styled.div`
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-left: 0rem;
  margin-right: 0.3rem;
  border-bottom-style: solid;
  border-bottomwidth: 0.3rem;
  font-size: 2rem;
  color:black;
`;

export const SectionIntro = styled.p`
  font-size: 1.2rem;
  align-items: center;
`;

export const SectionTitle = styled.div`
  font-size: 2rem;
  color: black;
  
`;

export const SubSectionTitle = styled.div`
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

export const ImagesList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
