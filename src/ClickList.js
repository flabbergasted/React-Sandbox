import React, { Component } from 'react';
import { connect } from "react-redux";
import { FixedSizeList as List } from 'react-window';

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>
);
class ClickListConnected extends Component {

  render() {
    const clickList = ({data, style, index}) => {
      return (
        // <li key={value}>
        //   Click {value}
        // </li>
        <div style={style}>
           Click {data[index]}
        </div>
      );
    }
    const clicks = this.props.clicks.map((value, index) => {
        return (
          <li key={value}>
            Click {value}
          </li>
        );
      });
    return (
      <List
        height={75}
        itemData={this.props.clicks}
        itemCount={this.props.clicks.length}
        itemSize={35}
        width={300}
      >
      {clickList}
      </List>
      // <ul>{clicks}</ul>
    );
  }
}
function mapStateToProps(state) {
    return { clicks: state.clicks };
  };
const ClickList = connect(mapStateToProps)(ClickListConnected);
export default ClickList;