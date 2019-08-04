import styled from "styled-components";

export const Input = styled.input`
border: 0.1rem solid ${props => props.theme.primary};
`


export const Link = styled.a`
  color: ${props => props.theme.black};
`;

export const IntroLink = styled(Link)`
  border-bottom-style: solid;
  border-bottomwidth: 0.3rem;

font-family: "Source Sans Pro", sans-serif;
font-weight: 600;
  &:hover {
    color: ${props => props.theme.light};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.black};
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  animation: tracking-in-contract 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation-delay: 0.1s;
  white-space: nowrap;
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
  font-weight: 700;
  color: ${props => props.theme.black};
`;

export const SectionIntro = styled.p`
text-align: justify;
  text-justify: inter-word;
  font-size: 1.4rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${props => props.theme.black};
`;

export const SectionTitle = styled.div`
  font-size: 2.5rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  color: ${props => props.theme.black};
`;
