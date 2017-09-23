//modules
import React, {Component} from 'react';
import styled from 'styled-components';

//self defined
import {colors} from './constants'
import Icon from './components/Icon.js'
import ArtLink from './components/ArtLink.js'

import Resume from './assets/Resume.svg'
import Notebook from './assets/Notebook.svg'
import House from './assets/House.svg'

//images
import GiphyGuesser from './assets/projects/GiphyGuesser.png'
import KeyboardSimulator from './assets/projects/KeyboardSimulator.PNG'
import Interactivity from './assets/projects/Interactivity.PNG'
import PersonalWebsite from './assets/projects/PersonalWebsite1.PNG'
import CurrentWebsite from './assets/projects/PersonalWebsite2.PNG'
import CtS from './assets/projects/ConnectTheStars.PNG'
import CC3K from './assets/projects/CC3K.PNG'


const list = [
  {
    src: GiphyGuesser,
    name: 'Giphy Guesser',
    lang: 'React Native',
    date: 'September 2017',
    desc: `For PennAppsXVI, my team and I used GIPHY's API and Expo.io to create a mobile game that works for both iOS and Android.
    For the project, I was lead developer and UI designer. It placed within the top 30% of all submissions at PennApps.`,
    links: [{name: 'github', link:'https://github.com/nicholaspun/giphyguesser/' }, {name: 'globe', link: 'https://devpost.com/software/relevant-tag-suggestions'}]
  }, {
    src: CurrentWebsite,
    name: 'Personal Website (3A)',
    lang: 'React.js',
    date: 'August 2017 - Present',
    desc: `The site you're viewing right now! Making my site be more than just a glorified resume by adding a Lecture Notes section, which
    renders Markdown and LaTeX.`,
    links: [{name: 'github', link:'https://github.com/christinasz/personal-website-3a' }, {name: 'globe', link: 'http://christinazhang.me'}]
  }, {
    src: KeyboardSimulator,
    name: 'Keyboard Simulator',
    lang: 'React.js',
    date: 'July 2017',
    desc: `In the summer, a random Windows update made my keyboard start lagging, much to my dismay.
    It was hard to repeatedly describe why situation and my spelling had suddenly degraded my friends, so I made this to demonstrate what was happening.`,
    links: [{name: 'github', link:'https://github.com/christinasz/keyboard-simulator' }, {name: 'globe', link: 'http://christinasz.github.io/keyboard-simulator/'}]
  }, {
    src: Interactivity,
    name: 'Interactivity',
    lang: 'React.js',
    date: 'May 2017',
    desc: `A site for me to learn and play with React.js.`,
    links: [{name: 'github', link:'https://github.com/christinasz/interactivity' }, {name: 'globe', link: 'http://christinasz.github.io/interactivity/'}]
  }, {
    src: PersonalWebsite,
    name: 'Personal Website (2B)',
    lang: 'HTML, CSS',
    date: 'January 2017',
    desc: `A static website that displays general information, and my design portfolio. Still working on bringing everything (and more!) from that site to here.`,
    links: [{name: 'github', link:'https://github.com/christinasz/christinasz.github.io' }, {name: 'globe', link: 'http://christinasz.github.io/'}]
  }, {
    src: CtS,
    name: 'Connect the Stars',
    lang: 'Python/C#',
    date: 'January 2017',
    desc: `2D Platformer game that was originally built in Pygame. All the sprites and graphics done by me, but I quickly grew frustrated with the limitations of Pygame.
    So I'm currently learning to use Unity and C# to remake the game.`,
    links: [{name: 'github', link:'https://github.com/christinasz/Connect-the-Stars' }]
  }, {
    src: CC3K,
    name: 'Chamber Crawler 3000',
    lang: 'C++',
    date: 'November - December 2016',
    desc: `The final project for my Object Oriented Programming course. Based on the dungeon-crawling game, Rogue.`,
    links: []
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
`;

const Row = styled.div `
  padding: 8px;
  transition: all 0.2s;
`;

const ProjectPreview = styled.div `
  display: block;
  margin: 0 auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
  width: ${props => props.expanded
  ? '100%'
  : '200px'};
  height: 200px;
`;
const ArtContainer = styled.div`
  padding: 8px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: ${colors.primary};
  bottom: 0;
  display: flex;
  color: white;

  @media only screen and (min-device-width: 768px) {
  background-color:white;
    position: static;
    dislay: block;
    padding: 0;
  }
`;
const Name = styled.div `
  font-size: 1.2em;
  font-weight: 500;
  color: #333;
`;

const Lang = styled.div `
  color: #333;
  font-size: 0.8em;
`;

class ProjectRow extends Component {
  render() {
    return (
      <Row className='row'>
        {this.props.projects.map((p, i) => (
          <Project key={i} p={p}>
            <Name>{p.name}</Name>
            <Lang>{p.lang} | {p.date}</Lang>
          </Project>
        ))}
      </Row>
    )
  }
}

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
          {p.desc}
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
        <ArtContainer>
            <ArtLink name='Home' showIconOnMobile={true} iconName='home' path='' src={House} style={{position: 'relative', display: 'block'}} />
            <ArtLink name='Resume' showIconOnMobile={true} iconName='file-text' path='resume' src={Resume} style={{position: 'relative', display: 'block'}} />
            <ArtLink name='Lecture Notes' showIconOnMobile={true} iconName='book' path='lecture-notes' src={Notebook} style={{position: 'relative', display: 'block'}}/>
        </ArtContainer>
        <Container className='container'>
          <Title>Projects</Title>
          <ProjectRow projects={list}/>
        </Container>
      </div>
    )
  }
}

export default Projects
