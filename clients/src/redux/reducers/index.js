import { combineReducers } from "redux";
import authReducer from "./authReducer"
import errorsReducer from './errorsReducer'
import profileReducer from './profileReducer'
import reclamationReducer from "./reclamationReducer";
import resignationReducer from "./resignationReducer";
import leaveReducer from "./leaveReducer";





export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    profiles: profileReducer,
    reclamations:reclamationReducer,
    resignations:resignationReducer,
    leaves:leaveReducer
})
 

 