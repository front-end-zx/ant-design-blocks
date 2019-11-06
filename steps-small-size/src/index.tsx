import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default () => (
  <div className="container">
    <div id="components-steps-demo-small-size">
      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
    </div>
  </div>
);
