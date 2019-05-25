import React, { Component } from 'react';
import { connect } from "react-redux";

class EntryFieldConnected extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        };

        this.clickFancy = this.clickFancy.bind(this);
        this.textChanged = this.textChanged.bind(this);
    }
    clickFancy() {
        this.props.onClick(this.state.value);
    }
    textChanged(e){
        this.setState({value:e.target.value});
    }
  render() {
    return (
        <div>
            <input type="text" onChange={this.textChanged} value={this.state.value}>
            </input>
            <button onClick={this.clickFancy}>Submit</button>
        </div>
    );
  }
}
  const EntryField = connect(null, null)(EntryFieldConnected);
export default EntryField;