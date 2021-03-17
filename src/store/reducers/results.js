import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

// ALWAYS UPDATE STATE ImMUTABLY BY MAKING CLONES/DEEP CLONES
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.CurrCounter, id: new Date() }),
      };
    case actionTypes.DELETE_RESULT:
      // making copy of original array and updating it immutably by returning new array (filter) of all
      // results that did not satisfy expresion (not deleted items) and setting this new array as part of updated state
      const updatedArray = state.results.filter((result) => result.id !== action.elId);
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

export default resultsReducer;
