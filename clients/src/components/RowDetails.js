/*import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../redux/actions/profileActions";
 function RowDetails({_id, user, tel, city, country, bio}) {
   const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
      dispatch(DeleteProfile(id))
    }
    
   
  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{tel}</td>
      <td>{city}</td>
      <td>{country}</td>
      <td>{bio}</td>
      <td>
        <button class="btn btn-outline-danger" onClick={()=>DeleteHandler(_id)}>Delete</button>
        <button class="btn btn-outline-primary"  >Update</button>
        <button class="btn btn-outline-primary"  >Edit</button>
      </td>
    </tr>
  );
}

export default RowDetails;*/

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../redux/actions/profileActions";

function RowDetails({ _id, user, tel, city, country, bio }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    tel,
    city,
    country,
    bio,
    address: ""
  });

  const DeleteHandler = (id) => {
    dispatch(DeleteProfile(id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const [isAdding, setIsAdding] = useState(false);
  const handleAddClick = () => {
    setIsAdding(true);
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to submit the modified data
    // For example, dispatch an action to update the profile
    setIsEditing(false);
  };

  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{tel}</td>
      <td>{city}</td>
      <td>{country}</td>
      <td>{bio}</td>
      <td>
      {isEditing || isAdding ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="Role"
            />
            <input
              type="text"
              name="tel"
              value={formData.tel}
              onChange={handleInputChange}
              placeholder="Tel"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
            />
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Bio"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => DeleteHandler(_id)}
            >
              Delete
            </button>
            <button className="btn btn-outline-primary" onClick={handleAddClick}>
      Ajouter
    </button>
            <button className="btn btn-outline-primary" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default RowDetails;

