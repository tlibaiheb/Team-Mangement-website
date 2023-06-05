import axios from 'axios'
import { ERRORS,  SET_LEAVE, SET_LEAVES, DELETE_LEAVE } from '../types';

export const AddConge = (form, setShow, setMessage)=>dispatch=>{
    axios
      .post("/api/leaves", form)
      .then(res => {
        setShow(true)
        setMessage("User added with success")
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

export const GetLeave = ()=>dispatch=>{
    axios
      .get("/api/leave")
      .then(res => {
          dispatch({
              type: SET_LEAVE,
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

export const GetLeaves = ()=>dispatch=>{
    axios
      .get("/api/leaves")
      .then(res => {
          dispatch({
              type: SET_LEAVES,
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

export const DeleteLeave = (id)=>dispatch=>{
   if(window.confirm("are you sure to delete this leave?")){
    axios
    .delete(`/api/leaves/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_LEAVE,
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