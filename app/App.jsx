import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from 'Layout';
import Home from 'components/Home';
import CSS from 'styles/app.scss';

class App extends Component {
  render() {
    return (
      <Layout>
          <Route path='/' component={Home} />
      </Layout>
    );
  }
};

export default withRouter(connect()(App));