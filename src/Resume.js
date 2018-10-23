import React from 'react';
import styled from 'styled-components';

import {colors} from './constants'
import Icon from './components/Icon.js'
import NavHeader from './components/NavHeader'

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
      <li>Experienced in developing for many form factors, from mobile to web development</li>
      <li>Strong visual sense cultivated from eight years of freelance design ventures</li>
      <li>Proficient in problem-solving and learning from self-teaching Photoshop and web development</li>
    </ul>
  </div>
)

const WorkExperience = () => (
  <div>
    <Heading>Work Experience</Heading>
    <h3>Visier Solutions, Inc</h3>
    <div className='row'>
      <div className='col'>
        <h4>Software Developer Co-op</h4>
      </div>
      <RightAligned className='col'>
        <h4>January - August 2018</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Implemented four new data visualizations for the Visier People app using Swift and Objective-C</li>
      <li>Optimized the app for graphs to viewable in landscape orientation by transitioning from in-house
layout library to Apple Auto Layout</li>
    </ul>
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
      <li>Automated QA for business analytics with Python scripts, reducing time from hours to seconds</li>
      <li>• Established and designed brand identity and style guidelines for the entire Big Data team</li>
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

        <h3><Link href='https://devpost.com/software/hack-the-north-2018-9oexmy' target='_blank'>Hack the North Simulator</Link>
        <Icon name='github' link='https://github.com/hygzhu/hack-the-north-2018'/>
        </h3>

      </div>
      <RightAligned className='col'>
        <h4>September 2018 (Hack the North 2018)</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Created a 2D resource management game that simulates a hacker’s experience at Hack the North</li>
      <li>Designed the character sprite sheets and animations</li>
      <li>Worked on player interactions and game mechanics within the game</li>
      <li>Winner of Best Use of Ubisoft’s Hacker’s Nest Student API</li>
    </ul>
    <div className='row'>
      <div className='col'>
          <h3><Link href='https://devpost.com/software/what-s-it' target='_blank'>bridgED
        </Link> <Icon name='github' link='https://github.com/christinasz/bridgED'/></h3>
      </div>
      <RightAligned className='col'>
        <h4>November 2017 (Hack Western 4)</h4>
      </RightAligned>
    </div>
    <ul>
      <li>Developed an iOS/Android app that allows users to take pictures of their surroundings and receive
a translation and description in their native language</li>
      <li>Placed Top 6 Overall, Winner of Best Use of IBM Watson Visual Recognition API and
Best Hack for Empowering Diversity through Design and Technology</li>
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
    <div>C/C++, Python, HTML5, CSS3 (and Sass), React.js, JavaScript</div>
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
    <NavHeader/>
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
