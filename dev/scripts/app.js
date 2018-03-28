import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
// import { withRouter } from 'react-router';

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
      this.reload = this.reload.bind(this);

    }
    componentDidMount() {
      this.setState({
        data: data
      })
    }

    reload() {

      this.props.history.push('/')
      // this.props.history.goBack();
      // forceUpdate()

      this.setState({
        colors: {},
        fonts: {}
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
      if (this.props.location.pathname !== '/') {
        return (
          <Route
            exact
            path="/styleguide/:topBar/:footerBar/:accent/:bodyText/:background/:borders/:headerText/:buttonText/:mainHeading/:subHeading/:placeholderText/:subHeadingStyle/:textTransform/:bodyFont/:labelText"
            render={(props) =>
              <Styleguide
                {...props}
                info={info}
                getRandomStyle={this.getRandomStyle}
                reload={this.reload}
              />
            }
          />
        )
      } else {
        return (
          <div>
            <MainContent
              location={this.props.location}
              getRandomStyle={this.getRandomStyle}
              reload={this.reload}
              info={info}
            />

          </div>
        )
      }
    }
}

module.exports = App;
// export default withRouter(App);

