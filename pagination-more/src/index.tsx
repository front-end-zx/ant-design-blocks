import React from "react";
import { Pagination } from "antd";

export default () => (
  <div className="container">
    <div id="components-pagination-demo-more">
      <Pagination defaultCurrent={6} total={500} />
    </div>
  </div>
);
