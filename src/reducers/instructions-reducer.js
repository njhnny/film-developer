import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  instructions: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_INSTRUCTIONS:
      return Object.assign({}, state, {
        isLoading: true
      });
    default:
      return state;
    }
};