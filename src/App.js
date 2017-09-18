import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home'
import Resume from './Resume';
import LectureNotes from './LectureNotes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/resume' exact component={Resume}/>
          <Route path='/lecture-notes' component={LectureNotes}/>
          <Route path='/' exact component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
