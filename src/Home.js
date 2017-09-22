import React from 'react';
import styled from 'styled-components';

import ArtLink from './components/ArtLink.js'
import Icon from './components/Icon.js'

import Laptop from './assets/Laptop.svg'
import Notebook from './assets/Notebook.svg'
import Resume from './assets/Resume.svg'


const Background = styled.div`
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Name = styled.h1`
  color: #333;
  font-weight: 100;
  font-size: 3em;
`;

const Icons = styled.div`
  text-align:left;
`;

const VerticalCenter = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 100;
  text-align: left;
  top: 40%;
  background-color: rgba(255,255,255,0.9);
  padding: 28px;
  transform: translateY(-50%)
`;

const ArtContainer = styled.div`
  padding: 8px;
  position: fixed;
  bottom: 0;
  display: flex;

  @media only screen and (min-device-width: 768px) {
    position: static;
    dislay: block;
    padding: 0;
  }
`;



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
    <ArtContainer>
      <ArtLink spin name='Resume' path='resume' src={Resume} width='27vw' style={{top: '0', left: '0'}}/>
      <ArtLink spin name='Lecture Notes' path='lecture-notes' width='27vw' src={Notebook} style={{bottom: '20%', right: '2%'}}/>
      <ArtLink spin name='Projects' path='projects' src={Laptop} width='27vw' style={{bottom: '2%', right: '50%'}}/>
    </ArtContainer>

  </Background>
)

export default Home
