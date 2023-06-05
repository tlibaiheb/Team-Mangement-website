import { DELETE_LEAVE , SET_LEAVE, SET_LEAVES  } from "../types";

const intitialState = {
  leaves: [],
  leave: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_LEAVE:
      return {
        ...state,
        leave: action.payload,
      };
    case SET_LEAVES:
      return {
        ...state,
        leaves: action.payload,
      };
      case DELETE_LEAVE:
        return {
          ...state,
          leaves: state.leaves.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
