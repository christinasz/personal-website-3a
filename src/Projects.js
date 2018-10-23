//modules
import React, {Component} from 'react';
import styled from 'styled-components';

//self defined
import {colors} from './constants'
import Icon from './components/Icon.js'
import NavHeader from './components/NavHeader.js'

//images
import GiphyGuesser from './assets/projects/GiphyGuesser.png'
import KeyboardSimulator from './assets/projects/KeyboardSimulator.PNG'
import Interactivity from './assets/projects/Interactivity.PNG'
import PersonalWebsite from './assets/projects/PersonalWebsite1.PNG'
import CurrentWebsite from './assets/projects/PersonalWebsite2.PNG'
// TODO: Get PNGs of these
import HtnSimulator from './assets/projects/htnSimulator.jpg'
import BridgED from './assets/projects/bridgED.jpg'


const list = [
  {
    src: HtnSimulator,
    name: 'Hack the North Simulator',
    lang: 'C++',
    date: 'September 2018 (Hack the North 2018)',
    line1: `Winner of Best Use of Ubisoft Hacker's Nest API!`,
    line2: `On the graphics side, I made and animated the character sprites and gameplay UI. 
    On the dev side,implemented the character movement, player interaction, and gameplay mechanics.`,
    links: [{name: 'github', link:'https://github.com/hygzhu/hack-the-north-2018' }, {name: 'globe', link: 'https://devpost.com/software/hack-the-north-2018-9oexmy'}]
  },
  {
    src: BridgED,
    name: 'bridgED',
    lang: 'React Native',
    date: 'November 2017 (HackWestern 4)',
    line1: `Top 6 Finalist, Winner of Best Use of IBM Watson Visual Recognition API and Best Hack for Empowering Diversity through Design and Technology!`,
    line2: `I designed the UI and logo of this app as well as worked on the React Native app.`,
    links: [{name: 'github', link:'https://github.com/christinasz/bridgED' }, {name: 'globe', link: 'https://devpost.com/software/what-s-it'}]
  },
  {
    src: GiphyGuesser,
    name: 'Giphy Guesser',
    lang: 'React Native',
    date: 'September 2017 (PennAppsXVI)',
    line1: `My team and I used GIPHY's API and Expo.io to create a mobile game that works for both iOS and Android.
    For the project, I was lead developer and UI designer. It placed within the top 30% of all submissions at PennApps.`,
    links: [{name: 'github', link:'https://github.com/nicholaspun/giphyguesser/' }, {name: 'globe', link: 'https://devpost.com/software/relevant-tag-suggestions'}]
  }, {
    src: CurrentWebsite,
    name: 'Personal Website (3A/3B)',
    lang: 'React.js',
    date: 'Last updated October 2018',
    line1: `The site you're viewing right now! Making my site be more than just a glorified resume by adding a Lecture Notes section, which
    renders Markdown and LaTeX. Underwent a facelift for 3B`,
    links: [{name: 'github', link:'https://github.com/christinasz/personal-website-3a' }, {name: 'globe', link: 'http://christinazhang.me'}]
  }, {
    src: KeyboardSimulator,
    name: 'Keyboard Simulator',
    lang: 'React.js',
    date: 'July 2017',
    line1: `In the summer, a random Windows update made my keyboard start lagging, much to my dismay.
    It was hard to repeatedly describe why situation and my spelling had suddenly degraded my friends, so I made this to demonstrate what was happening.`,
    links: [{name: 'github', link:'https://github.com/christinasz/keyboard-simulator' }, {name: 'globe', link: 'http://christinasz.github.io/keyboard-simulator/'}]
  }, {
    src: Interactivity,
    name: 'Interactivity',
    lang: 'React.js',
    date: 'May 2017',
    line1: `A site for me to learn and play with React.js.`,
    links: [{name: 'github', link:'https://github.com/christinasz/interactivity' }, {name: 'globe', link: 'http://christinasz.github.io/interactivity/'}]
  }, {
    src: PersonalWebsite,
    name: 'Personal Website (2B)',
    lang: 'HTML, CSS',
    date: 'January 2017',
    line1: `A static website that displays general information, and my design portfolio. Still working on bringing everything (and more!) from that site to here.`,
    links: [{name: 'github', link:'https://github.com/christinasz/christinasz.github.io' }, {name: 'globe', link: 'http://christinasz.github.io/'}]
  }
]

const Title = styled.h1`
  color: ${colors.primary}
`;

const Container = styled.div `
  padding: 28px;
  padding-bottom: 10%;
  
`;

const ProjectContainer = styled.div `
  text-align: left;
  padding: 32px;
  transition: all 0.2s;
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectPreview = styled.div `
  display: block;
  margin: 0 auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
  width: 100%;
  max-width: 600px;
  height: 200px;
`;

const Name = styled.div `
  font-size: 1.2em;
  font-weight: 800;
  color: #333;
`;

const Lang = styled.div `
  color: #333;
  font-size: 0.8em;
`;

class Project extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }
  handleClick = () => (this.setState({
    expanded: !this.state.expanded
  }))
  render() {
    const {children, p} = this.props
    return (
      <ProjectContainer className='col' onClick={this.handleClick}>
        <ProjectPreview src={p.src} expanded={this.state.expanded}/>
        {children}
        {this.state.expanded &&
        <div>
          <div>{p.links.map((link, i) => (<Icon {...link} key={i}/>))}</div>
          <p>{p.line1}</p>
          <p>{p.line2}</p>
        </div>
        }
      </ProjectContainer>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <NavHeader/>
        <Container className='container'>
          <Title>Projects</Title>
          {list.map((p, i) => (
          <Project key={i} p={p}>
            <Name>{p.name}</Name>
            <Lang>{p.lang} | {p.date}</Lang>
          </Project>
        ))}
        </Container>
      </div>
    )
  }
}

export default Projects
