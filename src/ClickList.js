import React, { Component } from 'react';
import { connect } from "react-redux";

class ClickListConnected extends Component {
  render() {
    const clicks = this.props.clicks.map((value, index) => {
        return (
          <li key={value}>
            Click {value}
          </li>
        );
      });
    return (
      <ul>{clicks}</ul>
    );
  }
}
function mapStateToProps(state) {
    return { clicks: state.clicks };
  };
const ClickList = connect(mapStateToProps)(ClickListConnected);
export default ClickList;