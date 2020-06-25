//(Use these comments to find and replace)
// BlankComponent
// blank-component

import React from "react";
import "./BlankComponent.scss";
import { connect } from "react-redux";

class BlankComponent extends React.Component {
  componentDidMount() {}

  render() {
    return <div className="blank-component">BlankComponent</div>;
  }
}

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(BlankComponent);
