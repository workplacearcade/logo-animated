"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import "./Logo.css";

var colors = ["#0D74AD", "#0290C3", "#00A3D6", "#01C0E6", "#02CDEB", "#FF4E32", "#FF261C", "#CF1D1A", "#F92514", "#EB2219", "#FF8F14", "#FFAE14", "#FFCA13", "#FFE215", "#03DAC9", "#07D2B6", "#03C8A2", "#00AB8B", "#00967E"];

var Logo = function (_Component) {
  _inherits(Logo, _Component);

  function Logo(props) {
    _classCallCheck(this, Logo);

    var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));

    _this.handleClick = function () {
      _this.shuffleColors();
    };

    _this.state = {
      colors: colors
    };
    return _this;
  }

  _createClass(Logo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.shuffleColorsBackards();
      }, 100);
    }
  }, {
    key: "shuffleColors",
    value: function shuffleColors() {
      var newColors = this.state.colors;
      newColors.push(newColors.shift());
      this.setState({ color: newColors });
    }
  }, {
    key: "shuffleColorsBackards",
    value: function shuffleColorsBackards() {
      var newColors = this.state.colors;
      newColors.unshift(newColors.pop());
      this.setState({ color: newColors });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "logo__container" },
        _react2.default.createElement(
          "svg",
          { width: "180px", height: "208px", viewBox: "0 0 180 208", version: "1.1" },
          _react2.default.createElement(
            "g",
            {
              id: "stage",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd"
            },
            _react2.default.createElement(
              "g",
              {
                id: "main",
                transform: "translate(-60.000000, -46.000000)",
                fillRule: "nonzero"
              },
              _react2.default.createElement(
                "g",
                { id: "logo", transform: "translate(60.000000, 46.000000)" },
                _react2.default.createElement("polygon", {
                  id: "1",
                  fill: this.state.colors[0],
                  points: "90.0086467 0.528 134.86 26.4133 90.0086467 52.2983"
                }),
                _react2.default.createElement("polygon", {
                  id: "2",
                  fill: this.state.colors[1],
                  points: "90.0086463 52.23 134.8514 26.3301 134.8428 78.115"
                }),
                _react2.default.createElement("polygon", {
                  id: "3",
                  fill: this.state.colors[2],
                  points: "134.8514 26.345 179.7028 52.23 134.8514 78.115"
                }),
                _react2.default.createElement("polygon", {
                  id: "4",
                  fill: this.state.colors[3],
                  points: "134.8514 78.1983 179.6942 52.2983 179.6855 104.083271"
                }),
                _react2.default.createElement("polygon", {
                  id: "5",
                  fill: this.state.colors[4],
                  points: "134.8601 78.115 179.7115 104 134.8601 129.885"
                }),
                _react2.default.createElement("polygon", {
                  id: "6",
                  fill: this.state.colors[5],
                  points: "179.6942 104.083271 134.8428 129.9683 179.6942 155.8532"
                }),
                _react2.default.createElement("polygon", {
                  id: "7",
                  fill: this.state.colors[6],
                  points: "179.7115 155.7849 134.8687 129.885 134.8773 181.6699"
                }),
                _react2.default.createElement("polygon", {
                  id: "8",
                  fill: this.state.colors[7],
                  points: "179.6942 155.8682 134.8428 181.7532 179.6942 207.638"
                }),
                _react2.default.createElement("polygon", {
                  id: "9",
                  fill: this.state.colors[8],
                  points: "134.8514 129.9149 90 155.7999 134.8514 181.6849"
                }),
                _react2.default.createElement("polygon", {
                  id: "10",
                  fill: this.state.colors[9],
                  points: "134.8601 181.7532 90.0172934 155.8532 90.0259389 207.638"
                }),
                _react2.default.createElement("polygon", {
                  id: "11",
                  fill: this.state.colors[10],
                  points: "45.1659 181.7532 90.0086463 155.8532 90.0000008 207.638"
                }),
                _react2.default.createElement("polygon", {
                  id: "12",
                  fill: this.state.colors[11],
                  points: "45.1486 129.9149 90 155.7999 45.1486 181.6849"
                }),
                _react2.default.createElement("polygon", {
                  id: "13",
                  fill: this.state.colors[12],
                  points: "0.3231 155.7999 45.1659 129.9 45.1572 181.6849"
                }),
                _react2.default.createElement("polygon", {
                  id: "14",
                  fill: this.state.colors[13],
                  points: "0.3145 104.083271 45.1659 129.9683 0.3145 155.8532"
                }),
                _react2.default.createElement("polygon", {
                  id: "15",
                  fill: this.state.colors[14],
                  points: "45.1659 78.13 0.3145 104.014975 45.1659 129.9"
                }),
                _react2.default.createElement("polygon", {
                  id: "16",
                  fill: this.state.colors[15],
                  points: "45.1486 78.1983 0.3058 52.2983 0.3145 104.083271"
                }),
                _react2.default.createElement("polygon", {
                  id: "17",
                  fill: this.state.colors[16],
                  points: "45.1572 26.36 0.3058 52.245 45.1572 78.13"
                }),
                _react2.default.createElement("polygon", {
                  id: "18",
                  fill: this.state.colors[17],
                  points: "90.0086463 52.245 45.1659 26.345 45.1745 78.13"
                }),
                _react2.default.createElement("polygon", {
                  id: "19",
                  fill: this.state.colors[18],
                  points: "90.0086463 0.528 45.1572 26.4133 90.0086463 52.2983"
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Logo;
}(_react.Component);

exports.default = Logo;