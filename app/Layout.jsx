import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    var custom = this.props.custom;
    return (
        <html>
            <head>
                <title>This is title</title>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans|PT+Serif:400,400i,700,700i&amp;subset=cyrillic" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/awsm.css/dist/awsm.min.css" />
                <link rel="stylesheet" href="/static/styles/main.css" />
            </head>
            <body>
                <main>
                    <div id="app">{this.props.children}</div>
                </main>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(custom)
                }} />
                <script src='/static/client.js' />
            </body>
        </html>
    );
  }
}

export default withRouter(connect(
    function(state) {
        return { custom: state };
    }
)(Layout));