import React from "react";
import styles from "./index.less";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

class Demo extends React.Component {
  state = {
    value: undefined
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode
              value="sss"
              title={<b style={{ color: "#08c" }}>sss</b>}
              key="random3"
            />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-tree-select-demo-multiple">
      <Demo />
    </div>
  </div>
);
