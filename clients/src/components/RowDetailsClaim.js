import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../redux/actions/profileActions";
import { DeleteReclamation } from "../redux/actions/reclamationActions";
import { DeleteResignation } from "../redux/actions/resignationAction";

function RowDetailsClaim({_id, user, type, description}) {
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
      <td>{description}</td>
     
      <td>
      <button class="btn btn-outline-primary" onClick={()=>DeleteHandler(_id)} >validate</button>
        <button class="btn btn-outline-danger" >Delete</button>

      </td>
    </tr>
  );
}

export default RowDetailsClaim;