import React from "react";
import { Button } from "antd";

export default () => (
  <div className="container">
    <div id="components-button-demo-basic">
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    </div>
  </div>
);
