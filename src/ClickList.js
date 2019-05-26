import React, { Component } from 'react';
import { connect } from "react-redux";
import { FixedSizeList as List } from 'react-window';

class ClickListConnected extends Component {
  constructor(props){
    super(props);
    this.filteredClicks = this.filteredClicks.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      filter : ''
    }
  }
  filteredClicks(allClicks, filter) {
    let r = [];
    for(let i = 0; i < allClicks.length; i++){
      if(i !== filter){
        r.push(allClicks[i]);
      }
    }
    return r;
  }
  handleChange(e){
    this.setState({filter: Number(e.target.value)});
  }
  render() {
    const clickList = ({data, style, index}) => {
      return (
        <div style={style}>
           Click {data[index]}
        </div>
      );
    }
    let c = this.filteredClicks(this.props.clicks, this.state.filter);
    return (
      <>
      <input type='text' onBlur={this.handleChange}></input>
      <List
        height={75}
        itemData={c}
        itemCount={c.length}
        itemSize={35}
        width={300}
      >
      {clickList}
      </List>
      </>
    );
  }
}
function mapStateToProps(state) {
    return { clicks: state.clicks };
  };
const ClickList = connect(mapStateToProps)(ClickListConnected);
export default ClickList;