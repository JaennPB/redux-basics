import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdditionCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractionCounter}
        />
      </div>
    );
  }
}

// USING REDUX

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdditionCounter: () => dispatch({ type: "ADD", value: 5 }),
    onSubtractionCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
