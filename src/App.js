import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import { Header, Footer } from './components/index';
import Router from './components/Router';

class App extends Component {
  render() {
    const dynamicProps = { name: 'content should be displayed here', number: 1, isFlag: false };
    return (
      <BrowserRouter>
        <Panel>
          <Header />
          <Router />
          <Footer />
        </Panel>
      </BrowserRouter>
    );
  }
}

export default App;
