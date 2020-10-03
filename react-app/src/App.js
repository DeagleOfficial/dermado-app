import React from "react";
import "./App.css";
import Head from "./Head.js";
import Home from "./Home.js";
import Foot from "./Foot.js";
import About from "./About.js";
import Nearby from "./Nearby.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      home: true,
      about: false,
      nearby: false,
      upload: false,
      getresults: false
    };

    this.handleUp = this.handleUp.bind(this);
  }

  handleUp(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "HOME") {
      this.setState({
        home: true,
        about: false,
        nearby: false,
        upload: false,
        getresults: false
      });
    } else if (e.target.innerHTML == "ABOUT") {
      this.setState({
        home: false,
        about: true,
        nearby: false,
        upload: false,
        getresults: false
      });
    } else if (e.target.innerHTML == "NEARBY") {
      this.setState({
        home: false,
        about: false,
        nearby: true,
        upload: false,
        getresults: false
      });
    } else if ((e.target.name = "upload")) {
      this.setState({
        home: false,
        about: false,
        nearby: false,
        upload: false,
        getresults: true
      });
    }
  }

  render() {
    return (
      <div id="page">
        <Head handleUp={this.handleUp} />
        {this.state.home && <Home handleUp={this.handleUp} />}
        {this.state.about && <About />}
        {this.state.nearby && <Nearby />}
        {!this.state.nearby && <Foot />}
      </div>
    );
  }
}
export default App;
