import React, { Component } from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi est nam deleniti et incidunt hic facere at accusantium, quasi praesentium impedit, sapiente libero neque inventore sunt quas dolores dolor maiores.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi est nam deleniti et incidunt hic facere at accusantium, quasi praesentium impedit, sapiente libero neque inventore sunt quas dolores dolor maiores.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi est nam deleniti et incidunt hic facere at accusantium, quasi praesentium impedit, sapiente libero neque inventore sunt quas dolores dolor maiores."
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    dalay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.dalay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>${this.state.position[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
