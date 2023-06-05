import { DELETE_RESIGNATION, SET_RESIGNATION, SET_RESIGNATIONS } from "../types";

const intitialState = {
    resignations: [],
  resignation: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_RESIGNATION:
      return {
        ...state,
        resignation: action.payload,
      };
    case SET_RESIGNATIONS:
      return {
        ...state,
        resignations: action.payload,
      };
      case DELETE_RESIGNATION:
        return {
          ...state,
          resignations: state.resignations.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
