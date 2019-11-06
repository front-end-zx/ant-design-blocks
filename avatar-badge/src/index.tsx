import React from "react";
import { Avatar, Badge } from "antd";

export default () => (
  <div className="container">
    <div id="components-avatar-demo-badge">
      <div>
        <span style={{ marginRight: 24 }}>
          <Badge count={1}>
            <Avatar shape="square" icon="user" />
          </Badge>
        </span>
        <span>
          <Badge dot>
            <Avatar shape="square" icon="user" />
          </Badge>
        </span>
      </div>
    </div>
  </div>
);
