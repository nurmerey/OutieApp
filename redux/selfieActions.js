import * as t from "./actionTypes";

export function addSelfie(details) {
  return function(dispatch) {
    return dispatch({
      type: t.ADD_SELFIE,
      payload: details
    });
  };
}
