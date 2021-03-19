// creating a utility function to copy and update state and avoid repeating code in swith statements in reducers

export const updateState = (prevState, updateState) => {
  return {
    ...prevState,
    ...updateState,
  };
};
