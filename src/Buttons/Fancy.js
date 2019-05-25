import React, { Component } from 'react';
import { connect } from "react-redux";
import {addClick} from "../actions/index";

class FancyConnected extends Component {
    constructor(props){
        super(props);
        this.state = {
            currClass: "Clicked"
        };
    }
    clickFancy() {
        this.props.addClick(1);
        this.setState({currClass: "ClickedAgain"});
    }
  render() {
    return (
      <div className="FancyButton">
            <div className={this.state.currClass} onClick={()=>this.clickFancy()}>
                {this.state.currClass === "Clicked" ? "Click": `Clicked (${this.props.clicks.length})`}
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { clicks: state.clicks };
  };
function mapDispatchToProps(dispatch) {
    return { addClick: click => dispatch(addClick(click)) };
  };
  const Fancy = connect(mapStateToProps, mapDispatchToProps)(FancyConnected);
export default Fancy;