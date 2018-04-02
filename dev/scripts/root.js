import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import { browserHistory } from 'react-router';

import App from './Components/App.js';


class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));