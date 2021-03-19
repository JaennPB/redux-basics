import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/actionsIndex';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.increment} />
        <CounterControl label="Decrement" clicked={this.props.decrement} />
        <CounterControl label="Add 5" clicked={this.props.add} />
        <CounterControl label="Subtract 5" clicked={this.props.subtract} />
        <hr />
        <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Results</button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li onClick={() => this.props.deleteResult(result.id)} key={result.id}>
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

const mapDispatchToProps = actions;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrementCounter: () => dispatch(actionCreators.increment()),
//     onDecrementCounter: () => dispatch(actionCreators.decrement()),
//     // passing action payload from ui to reducer hardcoded
//     onAdditionCounter: () => dispatch(actionCreators.add()),
//     onSubtractionCounter: () => dispatch(actionCreators.subtract()),
//     // passing action payload from ui to reducer dinamically
//     onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
//     onDeleteStoredResult: (id) => dispatch(actionCreators.deleteResult(id)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
