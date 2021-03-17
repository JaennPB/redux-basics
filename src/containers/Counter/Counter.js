import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAdditionCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractionCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li onClick={() => this.props.onDeleteStoredResult(result.id)} key={result.id}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// USING REDUX

const mapStateToProps = (state) => {
  return {
    ctr: state.counter.counter,
    storedResults: state.results.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    // passing action payload from ui to reducer hardcoded
    onAdditionCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractionCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    // passing action payload from ui to reducer dinamically
    onDeleteStoredResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, elId: id }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, CurrCounter: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
