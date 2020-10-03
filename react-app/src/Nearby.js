import React from "react";
import "./App.css";

class Nearby extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null
    };
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    } else {
      alert("Your browser does not support Geolocation");
    }
  };

  showPosition = (position) => {};

  render() {
    this.getLocation();
    let location = "&ll=" + this.state.lat + "," + this.state.lon;
    return (
      <div className="row" id="nearby-map">
        <p className="col-md-12 col-sm-12 col-lg-6" id="nearby-text">
          Connect with Dermatologists near you<br></br>
        </p>
        <iframe
          className="col-md-12 col-sm-12 col-lg-6"
          src={
            "https://maps.google.com/maps?&hl=en&q=dermatologist&t=&z=13&ie=UTF8&iwloc=B" +
            location +
            "&output=embed"
          }
        ></iframe>
      </div>
    );
  }
}

export default Nearby;
