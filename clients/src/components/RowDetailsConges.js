import React from "react";
import { useDispatch } from "react-redux";
import { DeleteResignation } from "../redux/actions/resignationAction";
import { DeleteLeave } from "../redux/actions/congeActions";
 
function RowDetailsConge({_id, user, startDate, endDate, reason ,status}) {
   const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
      dispatch(DeleteLeave(id))
    }
  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{reason}</td>
      <td>{status}</td>
     
      <td>
        <button class="btn btn-outline-danger" onClick={()=>DeleteHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
}

export default RowDetailsConge;