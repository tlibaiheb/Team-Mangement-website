import axios from 'axios'
import { DELETE_RESIGNATION, ERRORS, SET_RESIGNATION, SET_RESIGNATIONS} from '../types';

export const AddResignation = (form, setShow, setMessage)=>dispatch=>{
    axios
      .post("/api/resignations", form) 
      .then(res => {
        setShow(true)
        setMessage("resignations added with success")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
            setShow(false)
        }, 4000);
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetResignation = ()=>dispatch=>{
    axios
      .get("/api/resignation")
      .then(res => {
          dispatch({
              type: SET_RESIGNATION,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetResignations = ()=>dispatch=>{
    axios
      .get("/api/resignations")
      .then(res => {
          dispatch({
              type: SET_RESIGNATIONS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const DeleteResignation = (id)=>dispatch=>{
   if(window.confirm("are you sure to validate this Leave?")){
    axios
    .delete(`/api/resignations/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_RESIGNATION,
            payload: id
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    });
   }
}