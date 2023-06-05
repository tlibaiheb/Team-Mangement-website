import { DELETE_RECLAMATION, SET_RECLAMATION, SET_RECLAMATIONS } from "../types";

const intitialState = {
  reclamations: [],
  reclamation: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_RECLAMATION:
      return {
        ...state,
        reclamation: action.payload,
      };
    case SET_RECLAMATIONS:
      return {
        ...state,
        reclamations: action.payload,
      };
      case DELETE_RECLAMATION:
        return {
          ...state,
          reclamations: state.reclamations.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
