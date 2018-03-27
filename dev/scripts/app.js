import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

import data from './data.js';
import MainContent from './Components/MainContent.js';
import Footer from './Components/Footer.js';
import Styleguide from './Components/Styleguide.js';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        data: {},
        colors: {},
        fonts: {}
      }
      this.getRandomStyle = this.getRandomStyle.bind(this);

    }
    componentDidMount() {
      this.setState({
        data: data
      })
    }
    getRandomStyle(e) {
      let prop = this.state.data[e.target.value];
      const randoIndex = Math.floor(Math.random() * prop.length);
      this.setState({
        [e.target.value]: prop[randoIndex]
      })

    }

    render() {
      const colors = this.state.colors;
      const fonts = this.state.fonts;

      const info = Object.assign(colors, fonts);
      // console.log(this.props.pa);
      return (
        <Router>
          <div style={{ background: `#${colors.background}` }}>
            {/* <Footer colors={colors} getRandomStyle={getRandomStyle} /> */}
            <Route exact path="/" render={(props) => <MainContent {...props} getRandomStyle={this.getRandomStyle} info={info} />} />
            <Route
              path="/styleguide/:topBar/:footerBar/:accent/:bodyText/:background/:borders/:headerText/:buttonText/:mainHeading/:subHeading/:placeholderText/:subHeadingStyle/:textTransform/:bodyFont/:labelText"
              render={(props) => <Styleguide {...props} info={info} getRandomStyle={this.getRandomStyle} />}
            />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
