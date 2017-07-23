import React, { Component } from "react";
// import "./Logo.css";

const colors = [
  "#0D74AD",
  "#0290C3",
  "#00A3D6",
  "#01C0E6",
  "#02CDEB",
  "#FF4E32",
  "#FF261C",
  "#CF1D1A",
  "#F92514",
  "#EB2219",
  "#FF8F14",
  "#FFAE14",
  "#FFCA13",
  "#FFE215",
  "#03DAC9",
  "#07D2B6",
  "#03C8A2",
  "#00AB8B",
  "#00967E"
];

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors
    };
  }
  componentDidMount() {
    setInterval(()=>{
      this.shuffleColorsBackards();
    }, 100);
  }
  shuffleColors() {
    let newColors = this.state.colors;
    newColors.push(newColors.shift());
    this.setState({ color: newColors });
  }
  shuffleColorsBackards() {
    let newColors = this.state.colors;
    newColors.unshift(newColors.pop());
    this.setState({ color: newColors });
  }
  handleClick = () => {
    this.shuffleColors();
  }

  render() {
    return (
      <div className="logo__container">
        <svg width="180px" height="208px" viewBox="0 0 180 208" version="1.1">
          <g
            id="stage"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="main"
              transform="translate(-60.000000, -46.000000)"
              fillRule="nonzero"
            >
              <g id="logo" transform="translate(60.000000, 46.000000)">
                <polygon
                  id="1"
                  fill={this.state.colors[0]}
                  points="90.0086467 0.528 134.86 26.4133 90.0086467 52.2983"
                />
                <polygon
                  id="2"
                  fill={this.state.colors[1]}
                  points="90.0086463 52.23 134.8514 26.3301 134.8428 78.115"
                />
                <polygon
                  id="3"
                  fill={this.state.colors[2]}
                  points="134.8514 26.345 179.7028 52.23 134.8514 78.115"
                />
                <polygon
                  id="4"
                  fill={this.state.colors[3]}
                  points="134.8514 78.1983 179.6942 52.2983 179.6855 104.083271"
                />
                <polygon
                  id="5"
                  fill={this.state.colors[4]}
                  points="134.8601 78.115 179.7115 104 134.8601 129.885"
                />
                <polygon
                  id="6"
                  fill={this.state.colors[5]}
                  points="179.6942 104.083271 134.8428 129.9683 179.6942 155.8532"
                />
                <polygon
                  id="7"
                  fill={this.state.colors[6]}
                  points="179.7115 155.7849 134.8687 129.885 134.8773 181.6699"
                />
                <polygon
                  id="8"
                  fill={this.state.colors[7]}
                  points="179.6942 155.8682 134.8428 181.7532 179.6942 207.638"
                />
                <polygon
                  id="9"
                  fill={this.state.colors[8]}
                  points="134.8514 129.9149 90 155.7999 134.8514 181.6849"
                />
                <polygon
                  id="10"
                  fill={this.state.colors[9]}
                  points="134.8601 181.7532 90.0172934 155.8532 90.0259389 207.638"
                />
                <polygon
                  id="11"
                  fill={this.state.colors[10]}
                  points="45.1659 181.7532 90.0086463 155.8532 90.0000008 207.638"
                />
                <polygon
                  id="12"
                  fill={this.state.colors[11]}
                  points="45.1486 129.9149 90 155.7999 45.1486 181.6849"
                />
                <polygon
                  id="13"
                  fill={this.state.colors[12]}
                  points="0.3231 155.7999 45.1659 129.9 45.1572 181.6849"
                />
                <polygon
                  id="14"
                  fill={this.state.colors[13]}
                  points="0.3145 104.083271 45.1659 129.9683 0.3145 155.8532"
                />
                <polygon
                  id="15"
                  fill={this.state.colors[14]}
                  points="45.1659 78.13 0.3145 104.014975 45.1659 129.9"
                />
                <polygon
                  id="16"
                  fill={this.state.colors[15]}
                  points="45.1486 78.1983 0.3058 52.2983 0.3145 104.083271"
                />
                <polygon
                  id="17"
                  fill={this.state.colors[16]}
                  points="45.1572 26.36 0.3058 52.245 45.1572 78.13"
                />
                <polygon
                  id="18"
                  fill={this.state.colors[17]}
                  points="90.0086463 52.245 45.1659 26.345 45.1745 78.13"
                />
                <polygon
                  id="19"
                  fill={this.state.colors[18]}
                  points="90.0086463 0.528 45.1572 26.4133 90.0086463 52.2983"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Logo;
