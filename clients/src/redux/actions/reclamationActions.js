import axios from 'axios'
import { ERRORS, SET_RECLAMATION, SET_RECLAMATIONS, DELETE_RECLAMATION } from '../types';

export const AddReclamation = (form, setShow, setMessage)=>dispatch=>{
    axios
      .post("/api/reclamations", form)
      .then(res => {
        setShow(true)
        setMessage("claim added with success")
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

export const GetReclamation = ()=>dispatch=>{
    axios
      .get("/api/reclamation")
      .then(res => {
          dispatch({
              type: SET_RECLAMATION,
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

export const GetReclamations = ()=>dispatch=>{
    axios
      .get("/api/reclamations")
      .then(res => {
          dispatch({
              type: SET_RECLAMATIONS,
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

export const DeleteReclamation = (id)=>dispatch=>{
   if(window.confirm("are you sure to validat this reclamation?")){
    axios
    .delete(`/api/reclamations/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_RECLAMATION,
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