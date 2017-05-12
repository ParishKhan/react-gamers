import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/actions';

export class Home extends Component {
  render() {
    return (
      <article>
        <h1>Home</h1>
      </article>
    );
  }
}

export default connect()(Home)