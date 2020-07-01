import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TO_COUNTER:
      return (newState = state + action.payload);

    default:
        //state değişmediği için kendisini döndür
      return state;
  }
};
//javascript imutubility
export default counterReducer;
