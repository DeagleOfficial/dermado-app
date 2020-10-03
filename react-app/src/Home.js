import React from "react";
import "./App.css";
import doctor from "./doctor.svg";
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayhome: true,
      selectedfile: null,
      result_data: null,
      uploaded: false
    };
  }

  handleChange = (e) => {
    this.setState({
      selectedfile: e.target.files[0]
    });
  };

  //UPLOAD HANDLER FUNCTION
  handleUpload = (e) => {
    this.setState({
      uploaded: true
    })
    axios ({
      url: '/uploader',
      method: "POST",
      data: this.state.selectedfile
    }).then(res => {
      console.log(res)
      this.setState({
        displayhome: false,
        result_data: res.data
      })
    })
  }
  

  render() {
    return (
      <>
      {this.state.displayhome && <div className="row" id="mid">
        <div className="col-md-12 col-lg-6 mid-content">
          <p className="title">Dermado</p>
          <br></br>
          <p id="desc">AI-Powered Dermatology Assistant</p>
          <br></br>
          <input
            id="choosefile"
            type="file"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button type = "submit"
            name="upload"
            className="btn btn-lg"
            id="upload"
            onClick = {this.handleUpload}
          >
            Upload Image
          </button>
          {this.state.uploaded && <div className = "gettingresults">
          Getting your results...
          <Loader
         type="Puff"
         color="#F76A50"
         height={100}
         width={100}
 
        />
        </div>}
          <br></br>
          <img width="300px" src={this.state.imgsrc}></img>
        </div>
        <div className="col-md-12 col-lg-6" id="image-div">
          <img src={doctor} width="265px"></img>
        </div>
      </div>}

      {!this.state.displayhome && <div id="results">
        <p id="results-title">YOUR RESULTS</p>
        <div id="results-content">
        <p>Your Skin Anomaly is likely to be {this.state.result_data.name}. Chances of {this.state.result_data.cancer} cancer are present.</p>
        </div>
      </div>}
      </>
    );
  }
}

export default Home;
