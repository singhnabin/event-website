import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../UI/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide>
            <div className="discount_description">
              <h3>Price before january</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                nam odit, laborum debitis doloribus fuga ad in repellat
                necessitatibus rerum ea dolores exercitationem quae amet est
                voluptatibus blanditiis aspernatur id! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Asperiores aliquam atque ab
                eveniet nisi labore earum. Earum eligendi ut libero ipsam nisi v
              </p>

              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://goolge.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
