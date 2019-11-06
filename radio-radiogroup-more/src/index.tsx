import React from "react";
import { Radio, Input } from "antd";

class App extends React.Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? (
            <Input style={{ width: 100, marginLeft: 10 }} />
          ) : null}
        </Radio>
      </Radio.Group>
    );
  }
}

export default () => (
  <div className="container">
    <div id="components-radio-demo-radiogroup-more">
      <App />
    </div>
  </div>
);
