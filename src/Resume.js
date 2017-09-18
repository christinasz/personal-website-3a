import React from 'react';
import styled from 'styled-components';

const RightAligned = styled.div`
  text-align: right;
`;

const Resume = () => (
  <div className='container'>
      <h2>Work Experience</h2>
      <h3>Bell Network Big Data Centre of Excellence</h3>
      <div className='row'>
        <div className='col'>
          <h5>Web Developer & UI Designer</h5>
        </div>
        <RightAligned className='col'>
          <h5>May - August 2017</h5>
        </RightAligned>
      </div>
      <ul>
        <li>Developed a single page web application with a customized UI that allows quick access to resources on the team using React.js, Redux</li>
        <ul>
          <li>Worked closely with backend developer to design an architecture for the corresponding RESTful API</li>
          <li>Laid the groundwork for the ability to search for reports made by the team</li>
        </ul>
        <li>Established and designed brand identity for the team and style guidelines for all dashboards and communications</li>
        <li>Wrote Impala queries for dashboards for the consumption team</li>
        <li>Wrote Python scripts to expedite the QA process for business analytics</li>
      </ul>
      <h3>Rave Media, Inc. (Formerly WeMesh)</h3>
      <div className='row'>
        <div className='col'>
          <h5>UI/UX Designer</h5>
        </div>
        <RightAligned className='col'>
          <h5>May - August 2016</h5>
        </RightAligned>
      </div>
      <ul>
        <li>Produced wireframes and mock-ups for new features, assets, and interfaces using Photoshop, Illustrator and Axure RP</li>
        <li>Created animated prototypes in After Effects to facilitate ideas to developers</li>
        <li>Designed for both Web and Mobile interfaces, and created static web pages for the site with HTML5 and CSS3</li>
      </ul>
      <h2>Education</h2>
      <h3>University of Waterloo</h3>
      <div className='row'>
        <div className='col'>
          <h5>Bachelor of Computer Science, Honours <br/> Human-Computer Interaction Option</h5>
        </div>
        <RightAligned className='col'>
          <h5>2015-2020</h5>
        </RightAligned>
      </div>
  </div>
)

export default Resume;
