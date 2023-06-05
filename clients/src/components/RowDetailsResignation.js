import React from "react";
import { useDispatch } from "react-redux";

import { DeleteResignation } from "../redux/actions/resignationAction";

function RowDetailsResignation({_id, user, type, reason}) {
   const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
      dispatch(DeleteResignation(id))
    }
  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{type}</td>
      <td>{reason}</td>
     
      <td>
        <button class="btn btn-outline-danger" onClick={()=>DeleteHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
}

export default RowDetailsResignation;