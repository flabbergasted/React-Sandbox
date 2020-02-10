import React, { Component, forwardRef, createContext } from 'react';
import { connect } from "react-redux";
import { FixedSizeList as List } from 'react-window';
import memoize from 'memoize-one';
import { removeClick } from './actions';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css';
const StickyListContext = createContext();
StickyListContext.displayName = "StickyListContext";

class ClickListConnected extends Component {
  constructor(props){
    super(props);
    this.filteredClicks = this.filteredClicks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleGrow = this.toggleGrow.bind(this);

    this.state = {
      filter : '',
      doGrow: false
    }
  }
  filteredClicks = memoize((allClicks, filter) => {
    let r = [];
    let f = [];
    for(let i = 0; i < allClicks.length; i++){
      if(i !== filter){
        r.push(allClicks[i]);
      }
      else{
        f.push(allClicks[i]);
      }
    }
    return {dis:r, filtered:f};
  });
  
innerElementType = forwardRef(({ children, ...rest }, ref) => (
    ({ filtered }) => (
      <div ref={ref} {...rest}>
        {filtered.map(index => (
          <span
            index={index}
            key={index}
            style={{ top: index * 35, left: 0, width: "100%", height: 35 }}
          >Test</span>
        ))}

        {children}
      </div>
    )
));

  handleChange(e){
    this.setState({filter: Number(e.target.value)});
  }
  toggleGrow(){
    const curr = this.state.doGrow;
    let next = false;
    if(!curr){
      next = true;
    }
    this.setState({doGrow: next});
  }
  render() {
    const clickList = ({data, style, index}) => {
      return (       
          <div style={style}>
            Click {data[index]}
          </div>
      );
    }
    const filteredList = (filteredOut) => {
      let r = filteredOut.map((val, i) => {
        return clickList({data: filteredOut, style: {color: 'blue'}, index: i});
      });
      return (r);
    }
    const growTest = (doGrow) => {
      const res = (
        <CSSTransition
          key={"0_test_1"}
          timeout={250}
          classNames="grow"
        ><div>
          <div className="row">
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
        <div>test1</div>
        <div>test2</div>
      </div>
      <div className="row">
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
        <div>test3</div>
        <div>test4</div>
      </div></div></CSSTransition>);
      if(doGrow){
        return res;
      }
      return (<></>);
    }
    let res = this.props.clicks; //this.filteredClicks(this.props.clicks, this.state.filter);
    const clicks = res.map((val, i) => {
      return ( 
        <CSSTransition
          key={i}
          timeout={500}
          classNames="item"
        >
          <div key={i} onClick={() => this.props.removeClick()}>
            Click {i}
          </div>
        </CSSTransition>)
    })
    return (
      <>
      <div className="container">
        <TransitionGroup>
        {growTest(this.state.doGrow)}
        </TransitionGroup>
      </div>
      <input type='button' onClick={() => this.toggleGrow()} text="Grow"></input>
      <input type='text' onBlur={this.handleChange}></input>
      {/* <div>
        {filteredList(res.filtered)}
      </div> */}
      {/* <List
        height={75}
        itemData={res.dis}
        itemCount={res.dis.length}
        itemSize={35}
        width={300}
      >
      {clickList}
      </List> */}
        <TransitionGroup>
          {clicks}
        </TransitionGroup>
      </>
    );
  }
}
function mapStateToProps(state) {
    return { clicks: state.clicks };
  };
  function mapDispatchToProps(dispatch) {
    return { removeClick: click => dispatch(removeClick()) };
  };
const ClickList = connect(mapStateToProps, mapDispatchToProps)(ClickListConnected);
export default ClickList;