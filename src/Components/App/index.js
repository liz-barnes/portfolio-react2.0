import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
            <Nav />
        </Router>
      </>
    );
  }
}
