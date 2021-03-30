import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav';
import Routes from '../../helpers/Routes';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
            <Nav />
            <Routes />
        </Router>
      </>
    );
  }
}
