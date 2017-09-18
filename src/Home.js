import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Laptop from './assets/Laptop.svg'
import Notebook from './assets/Notebook.svg'
import Resume from './assets/Resume.svg'

const Background = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
`;

const Name = styled.h1`
  color: #333;
  font-weight: 100;
  font-size: 3em;
`;

const Icons = styled.div`
  text-align:left;
`;

const IconLink = styled.a`
  padding: 8px;
  color: #AA076B;
  transition: all 0.2s;
  &:hover {
    color: #61045F;
  }
  &:visited, &:focus {
    color:#AA076B
  }
`;

const VerticalCenter = styled.div`
  position: relative;
  z-index: 100;
  text-align: left;
  top: 40%;
  background-color: rgba(255,255,255,0.9);
  padding: 28px;
  transform: translateY(-50%)
`

function randomDegree() {
  return Math.floor(Math.random() * 360);
}

const Art = styled.img`
  height: 40vh;
  padding: 28px;
  transform: rotate(${props => props.degree}deg);
`;

const ArtLink = styled(NavLink)`
  span {
    opacity: 0;
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
`;

const ArtLinkTitle = styled.span`
  z-index: 9;
  font-size: 2em;
  font-weight: 100;
  transition: all 0.3s;
  color: #AA076B;
  padding: 16px;
`;


const StyledPage = styled.div`
  position: absolute;
`;

const Icon = (props) => (
  <IconLink href={props.link} target='_blank'>
    <i className={'fa fa-lg fa-' + props.name}></i>
  </IconLink>
)

const Page = (props) => (
  <ArtLink to={'/' + props.path}>
    <StyledPage style={props.style} >
      <Art src={props.src} degree={randomDegree()} />
      <ArtLinkTitle name={props.name}>{props.name}</ArtLinkTitle>
    </StyledPage>
  </ArtLink>
)

const Home = () => (
  <Background>
    <VerticalCenter className='container'>
      <Name>Christina Zhang</Name>
      Hello! I'm a 3A Computer Science student at the University of Waterloo.
      <br/>
      In short, I like designs, baking, and making things.
      <br />
      I also like being employed! I'm currently looking for an internship for Winter 2018.
      <Icons>
        <Icon name='github' link='https://github.com/christinasz'/>
        <Icon name='linkedin' link='https://linkedin.com/in/christinaszhang'/>
        <Icon name='envelope' link='mailto:christina.s.zhang@uwaterloo.ca'/>
      </Icons>
    </VerticalCenter>

    <Page name='Resume' path='resume' src={Resume} style={{top: '0', left: '0'}}/>
    <Page name='Lecture Notes' path='lecture-notes' src={Notebook} style={{bottom: '50%', right: '0'}}/>
    <Page name='Projects' path='projects' src={Laptop} style={{bottom: '0', right: '50%'}}/>

  </Background>
)

export default Home
