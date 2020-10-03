import React from "react";
import "./App.css";

class Foot extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="row" id="footer-content">
          <a
            className="col-md-12 col-sm-12 col-lg-4"
            href="mailto:supratikchakraborty1@gmail.com"
          >
            E-MAIL
          </a>
          <a
            className="col-md-12 col-sm-12 col-lg-4"
            href="https://github.com/DeagleOfficial/dermado-app.git"
          >
            GITHUB
          </a>
          <a className="col-md-12 col-sm-12 col-lg-4" href="tel:+918584832114">
            CONTACT
          </a>
        </div>
      </div>
    );
  }
}

export default Foot;
