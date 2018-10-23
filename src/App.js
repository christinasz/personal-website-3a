import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home'
import Resume from './Resume';
import LectureNotes from './LectureNotes'
import Projects from './Projects'
import {colors} from './constants'
import NavHeader from './components/NavHeader'

const Navbar = styled.ul `
  background-color: ${colors.primary};
  padding: 0;
  margin: 0;
  text-align: center;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  padding: 8px;
  display: inline-block;
  font-weight: 600;
  color: ${colors.link};
  &:visited {
    color: ${colors.link};
  }
  &:hover, &:focus {
    color: ${colors.linkHover};
  }
`;

const activeStyle = {
    borderBottom: '3px solid white',
    color: '#fff'
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route path='/resume' exact component={Resume}/>
          <Route path='/lecture-notes' component={LectureNotes}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/' exact component={Home}/>
      </div>
      </Router>
    );
  }
}

export default App;
