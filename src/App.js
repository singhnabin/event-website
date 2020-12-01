import React, { Component } from "react";

import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/Featured";
import VenueNfo from "./components/VenuNfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />
        <Element name="event">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNfo />
        </Element>

        <Element name="highlight">
          <Highlight />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
