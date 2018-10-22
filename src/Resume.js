import React from 'react';
import styled from 'styled-components';

import {colors} from './constants'
import ArtLink from './components/ArtLink.js'
import Icon from './components/Icon.js'


import Laptop from './assets/Laptop.svg'
import Notebook from './assets/Notebook.svg'
import House from './assets/House.svg'
import pdfResume from './assets/resume.pdf'

const Header = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const RightAligned = styled.div `
  text-align: right;
`;

const Heading = styled.h2 `
  font-weight: bold;
  color: ${colors.primary};
`;

const Container = styled.div `
  min-height: 100vh;
  width: 100%;
  padding-bottom: 10%;
`;

const ArtContainer = styled.div`
  padding: 8px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background-color: ${colors.primary};
  bottom: 0;
  display: flex;

  @media only screen and (min-device-width: 768px) {
    background-color:white;
    position: static;
    dislay: block;
    padding: 0;
  }
`;
const CenterColumn = styled.div `
  padding: 28px;
  background-color: rgba(255, 255, 255, 0.9);
`

const Link = styled.a`
  &:hover {
    color: ${colors.secondary};
    transition: all 0.2s;
  }
  color: black;
`;

const Summary = () => (
  <div>
    <Heading>Summary</Heading>
    <ul>
      <li>Familiar with multiple high-level programming languages such as C++ and Python</li>
      <li>Strong visual sense cultivated from eight years of freelance design ventures</li>
      <li>Proficient in problem-solving and learning from self-teaching Photoshop and web development</li>
      <li>Experienced in working effectively in several different environments, from startup to corporate</li>
    </ul>
  </div>
)

const WorkExperience = () => (
  <div>
    <Heading>Work Experience</Heading>
    <h3>Bell Canada - Network Big Data</h3>
    <div className='row'>
      <div className='col'>
        <h4>Web Developer / UI Designer</h4>
      </div>
      <RightAligned className='col'>
        <h4>May - August 2017</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Designed and developed a web portal for the Big Data team using React.js and Redux</li>
      <ul>
        <li>Worked closely with backend developer to design an architecture for the corresponding RESTful API</li>
        <li>Created custom UI library to comply with Bell's existing identity</li>
        <li>Engineered a custom search feature for MicroStrategy reports</li>
      </ul>
      <li>Wrote Impala queries for dashboards for the consumption team</li>
      <li>Automated the QA process for business analytics with Python scripts, reducing time from hours to seconds</li>
      <li>Established and designed brand identity and style guidelines for the entire Big Data team</li>
    </ul>
    <h3>Rave Media, Inc. (Formerly WeMesh)</h3>
    <div className='row'>
      <div className='col'>
        <h4>UI/UX Designer</h4>
      </div>
      <RightAligned className='col'>
        <h4>May - August 2016</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Produced wireframes and mock-ups for new interfaces for web and mobile with Photoshop and Illustrator</li>
      <li>Created animated prototypes in After Effects to facilitate ideas to developers</li>
      <li>Designed and created static web pages for the site with HTML5 and CSS3</li>
    </ul>
  </div>
)

const Projects = () => (
  <div>
    <Heading>Projects</Heading>
    <div className='row'>
      <div className='col'>

        <h3><Link href='https://devpost.com/software/relevant-tag-suggestions' target='_blank'>Giphy Guesser</Link>
        <Icon name='github' link='https://github.com/nicholaspun/giphyguesser'/>
        </h3>

      </div>
      <RightAligned className='col'>
        <h4>September 2017 (PennApps XVI)</h4>
      </RightAligned>
    </div>
    <ul>
      <li>iOS and Android guessing game that utilizes GIPHY’s API for content, written in React Native</li>
      <li>Lead developer and UI designer on the project, ranked within top 30% of all participants</li>
    </ul>
    <div className='row'>
      <div className='col'>

          <h3><Link href='https://christinazhang.me' target='_blank'>Personal Website
        </Link> <Icon name='github' link='https://github.com/christinasz/personal-website-3a'/></h3>
      </div>
      <RightAligned className='col'>
        <h4>August 2017 - Present</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Creating a website to house portfolio, projects, and contact information</li>
      <li>Includes lecture notes that are written in Markdown/LaTeX and rendered dynamically on the site</li>
    </ul>
  </div>
)

const Education = () => (
  <div>
    <Heading>Education</Heading>
    <h3>University of Waterloo</h3>
    <div className='row'>
      <div className='col'>
        <h5>Bachelor of Computer Science, Honours
          <br/>
          Human-Computer Interaction Option</h5>
      </div>
      <RightAligned className='col'>
        <h4>September 2015 - June 2020</h4>
      </RightAligned>
    </div>
  </div>
)

const Skills = () => (
  <div>
    <Heading>Skills</Heading>
    <h3>Proficient:</h3>
    <div>Swift, C/C++, Python, HTML5, CSS3 (and Sass), React.js, JavaScript</div>
    <br/>
    <h3>Familiar: </h3>
    <div>SQL, Impala, Java</div>
    <br/>
    <h3>Other:</h3>
    <div>Git, JIRA, AJAX, Adobe Creative Suite</div>
    <br/>
  </div>

)
const Resume = () => (
  <Container>
    <ArtContainer>
      <ArtLink name='Home' showIconOnMobile={true} iconName='home' path='' src={House} style={{position: 'relative', display: 'block'}} />
      <ArtLink name='Projects' showIconOnMobile={true} iconName='laptop' path='projects' src={Laptop} style={{position: 'relative', display: 'block'}} />
      <ArtLink name='Lecture Notes' showIconOnMobile={true} iconName='book' path='lecture-notes' src={Notebook} style={{position: 'relative', display: 'block'}}/>
    </ArtContainer>
    <CenterColumn className='container'>
      <Header>
        <Heading>Christina Zhang</Heading>
        <Link href={pdfResume} target='_blank'>PDF Version</Link>
      </Header>
      <Summary />
      <hr/>
      <Skills/>
      <hr/>
      <WorkExperience/>
      <hr/>
      <Projects/>
      <hr/>
      <Education/>
    </CenterColumn>
  </Container>
)

export default Resume;
