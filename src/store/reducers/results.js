import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../utility';

const initialState = {
  results: [],
};

// making switch statement even leaner by creating a function to bundle extra code from DELETE_RESULT case
const deleteResult = (state, action) => {
  // doing extra tranformation
  // making copy of original array and updating it immutably by returning new array (filter) of all
  // results that did not satisfy expresion (not deleted items) and setting this new array as part of updated state

  const updatedArray = state.results.filter((result) => result.id !== action.elId);
  // returning utility function
  return updateState(state, { results: updatedArray });
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateState(state, {
        results: state.results.concat({ value: action.CurrCounter, id: new Date() }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultsReducer;
