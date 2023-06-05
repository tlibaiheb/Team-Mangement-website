import React, {useState } from "react";
import Inputs from "../../components/Inputs";
import { useDispatch, useSelector } from 'react-redux'
import Classnames from 'classnames'
import { AddProfile, GetProfile } from "../../redux/actions/profileActions";
import { AddReclamation } from "../../redux/actions/reclamationActions";
 function Reclamationss() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const profiles = useSelector(state=>state.profiles)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
  e.preventDefault();
  dispatch(AddReclamation(form, setShow, setMessage))
  }

  /*useEffect(async ()=>{
   await dispatch(GetProfile())
   setForm(profiles.profile)
  },[])*/
   
  return (
    <div className="container p-4 mt-4">
      
        
          <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none"}}>
          {message}
        </div>
        
      
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Claim</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmit}>
              <Inputs name="type" label="Type" value={form && form.type ? form.type : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.type}/>
              <Inputs name="description" label="Description" value={form && form.description ? form.description : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.description}/>
                
              
               
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  validate <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reclamationss; 

