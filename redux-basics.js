// import redux using node js
const redux = require("redux");

// setting state
const initialState = {
  counter: 0,
};

// #2 creating reducer (links components to store)
// adding default parameter to initialize state + setting actions
const rootReducer = (state = initialState, action) => {
  // setting action
  if (action.type === "INC_COUNTER") {
    // ALWAYS COPY STATE
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  // different action
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  // if no action return state
  return state;
};

// #0 creating store
const createStore = redux.createStore;
const store = createStore(rootReducer);

// #3 setting subscriptions in case of dispatches
// function that runs automatically in case of state mututation by reducer
store.subscribe(() => {
  console.log("[Subscription from future dispatches]", store.getState());
});

// #1 dispatching actions from components to reducer
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
