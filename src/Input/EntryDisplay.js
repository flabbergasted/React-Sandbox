import React, { Component } from 'react';
import { connect } from "react-redux";
import EntryField from "./EntryField";

class EntryDisplayConnected extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "initial value"
        };
    }
    entryComplete(value){
        this.setState({value: value});
    }
  render() {
    return (
        <div>
            <span>{this.state.value}</span>
            <EntryField value={this.state.value} onClick={(val) => this.entryComplete(val)}></EntryField>
        </div>
    );
  }
}

  const EntryDisplay = connect(null, null)(EntryDisplayConnected);
export default EntryDisplay;