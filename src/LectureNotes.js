import React, {Component} from 'react';
import styled from 'styled-components';
import Markdown from 'react-rich-markdown';
import {Route, NavLink, Link} from 'react-router-dom';

import './lecturestyle.min.css'

import 'katex/dist/katex.min.css'

// An array of Objects that organizes my notes by subject and lecture number
// {name: String, lecture: [Array of numbers]}
const notes = [
  {
    name: 'CS246',
    lectures: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  },
  {
    name: 'CS341',
    lectures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  {
    name: 'CS350',
    lectures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
];

const Content = styled.div `
  display: flex;
  flex-direction: column;
  /* Display vertically on mobile */
  @media only screen and (min-device-width: 768px) {
    flex-direction: row;
  }
`;

const AuthorLink = styled(Link)`
  color: white;
  &:visited, &:hover, &:focus {
    color: white;
    text-decoration: none;
    outline: none;
  }
`;

const Navbar = styled.ul `
  padding-left: 0;
  color: white;
  list-style: none;
  flex: 1 0 1;
  background-color: #333;

  @media only screen and (min-device-width: 768px) {
    min-height: 100vh;
  }
`;

const NoteContainer = styled.div `
  width: 100%;
  flex: 5;
  padding: 32px;
  tr {
    td, th {
      border: 1px solid gray;
      padding: 4px;
    }
  }
`;

const Info = styled.div `
  display: none;
  @media only screen and (min-device-width: 768px){
    background-color: #673AB7;
    display: block;
    padding: 24px;
    text-align: center;
  }
`;

const LectureList = styled.ul `
  overflow: hidden;
  height: ${props => props.expanded
  ? props.height + 'px'
  : '0px'};
  width: 100%;
  padding-left: 0;
  background-color: #444;
  transition: all 0.2s;
`;

const LectureLink = styled(NavLink)`
  width: 100%;
  display: block;
  padding: 8px 32px;
`
const Lecture = styled.li `
  height: 40px;
  text-align: center;
  background-color: #444;
  list-style: none;
  a, a:visited, a:hover, a:focus {
    text-decoration: none;
    color: white;
  }
`;

const CourseName = styled.button `
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
  background-color: #222;
  border: none;
  &:focus {
    outline: none;
  }
`;

class Note extends Component {
  constructor() {
    super()
    this.state = {
      markdown: ''
    }
  }
  componentWillMount() {
    const path = require('./notes/' + this.props.course + '/lecture-' + this.props.lecture + '.md');
    fetch(path).then(response => {
      return response.text()
    }).then(text => {
      this.setState({markdown: text})
    })
  }
  render() {
    const options ={
      math: true,
      sh: true
    }
    return (
      <NoteContainer className='container'>
        <Markdown source={this.state.markdown} options={options} />
      </NoteContainer>
    )
  }
}

class Course extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    const {name, lectures} = this.props.data;
    return (
      <li>
        <CourseName onClick={this.handleClick}>
          {name}
        </CourseName>
        <LectureList expanded={this.state.expanded} height={lectures.length ? lectures.length * 40 : 40}>
          {lectures.length ?
            // If there are lectures, display them, otherwise display 'No notes yet!'
            lectures.map((lecture, index) => (
              <Lecture key={index}>
                <LectureLink activeStyle={{
                  backgroundColor: '#333'
                }} to={`${this.props.match.path}/${name}/${lecture}`}>
                  Lecture {lecture}
                </LectureLink>
              </Lecture>
            )) : 'No notes yet!'
        }
        </LectureList>
      </li>
    )
  }
}


class LectureNotes extends Component {
  render() {
    const {match} = this.props;
    return (
        <Content>
            <Navbar>
              <Info>
                <h3>Lecture Notes</h3>
                <AuthorLink to='/'>Christina Zhang</AuthorLink>
              </Info>
              {/*List the courses*/}
              {notes.map((course, index) => (<Course key={index} match={match} data={course}/>))}
            </Navbar>
            {notes.map((course, index) => (course.lectures.map((lecture, index) => (
              <Route key={index} path={`${match.path}/${course.name}/${lecture}`} component={() => (<Note lecture={lecture} course={course.name}/>)}/>
            ))))}
        </Content>
    )
  }
}

export default LectureNotes;
