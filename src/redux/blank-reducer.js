import actions from "./blank-actions";

let initState = {};

const blankReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const blankFunction = (blank) => ({ type: actions.BLANK_ACTION, blank });

export default blankReducer;
