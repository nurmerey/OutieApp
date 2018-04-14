import * as t from "./actionTypes";

function SelfieReducer(state = [], action) {
  switch (action.type) {
    case t.ADD_SELFIE:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default SelfieReducer;
