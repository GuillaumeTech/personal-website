import styled from "styled-components";
import { keyframes } from "styled-components";


const slidein = keyframes`
  from {
    background-size: 100% 0%;
  }

  to {
    background-size: 100% 1.5rem;
  }
`;


export const MenuContents = styled.div`
  display: block; 
  background: white; 

  color: ${props => props.theme.black}; 
  padding: 1.3rem; 
  font-size: 1rem; 
  white-space: nowrap;
  @media (max-width: 768px) {
    width:100%;
    text-align:center;
  }
  
`

export const Menu = styled.nav`
  display: flex; 
  width:100%;
  justify-content: flex-end;
  position: fixed; 
  bottom: 2rem; 
  right: 4rem;
  z-index: 99; 
  font-size: 1rem; 
  @media (max-width: 768px) {
    justify-content: center;
    right: 0rem;
    bottom: 0rem; 
  }
`

export const Input = styled.input`
border: 0rem solid ${props => props.theme.primary};
width: 100%;
font-size: 1.5rem;
border-bottom: 0.2rem solid ${props => props.theme.primary};
background-color:$light;
padding: 0.5rem
&::placeholder { 
  color: ${props => props.theme.black};
  opacity:0.7;
}
`

export const TextArea = styled.textarea`
border: 0.2rem solid ${props => props.theme.primary};
font-size: 1.25rem;
width: 100%;
height: 15rem;
padding: 0.5rem
background-color:$light;
&::placeholder { 
  color: ${props => props.theme.black};
  opacity:0.7;
}
`


export const Link = styled.a`
  color: ${props => props.theme.black};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.black};
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  padding:0.2rem;
  animation: tracking-in-contract 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: 0.1s;
`;

export const Date = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.black};
`;

export const Content = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.black};
`;

export const ExperienceTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.black};
`;

export const Center = styled.div`
  text-align: left;
  color: ${props => props.theme.black};
  font-size: 2rem;
  animation: reveal 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: 0.5s;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: ${props => props.theme.black};
`;

export const SectionIntro = styled.div`
text-align: left;
  text-left: inter-word;
  font-size: 1.4rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  line-height: 2.3rem;
  color: ${props => props.theme.black};
`;

export const SectionTitle = styled.div`
  background-image: ${props => props.theme.primary_gradient};
  background-repeat: no-repeat;
  background-size: 100% 1.5rem;
  background-position: 0% 100%;
  padding-bottom: 1.5rem;
  font-size: 2.5rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  animation: ${slidein} 0.3s ease-out 1;
  animation-play-state: paused;
  color: ${props => props.theme.black};
`;
