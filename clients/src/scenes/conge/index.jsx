import React, {useState } from "react"; //OK
import Inputs from "../../components/Inputs"; //OK
import { useDispatch, useSelector } from 'react-redux' //OK
import { AddConge } from "../../redux/actions/congeActions";
 
 function Leavess() { //ok
  const [form, setForm] = useState({}) //ok
  const dispatch = useDispatch() //ok
  const errors = useSelector(state=>state.errors) //ok
  const leaves = useSelector(state=>state.leaves) //ok
  const [message, setMessage] = useState("") //ok
  const [show, setShow] = useState(false) //ok
  const onChangeHandler = (e)=>{ //ok
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{ 
  e.preventDefault();
  dispatch(AddConge(form, setShow, setMessage)) //ok
  }

 
   
  return (
    <div className="container p-4 mt-4">
      
        
          <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none"}}>
          {message}
        </div>
        
      
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Leave</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmit}>
              <Inputs name="startDate" label="StartDate" value={form && form.startDate ? form.startDate : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.startDate}/>
              <Inputs name="endDate" label="EndDate" value={form && form.endDate ? form.endDate : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.endDate}/>
              <Inputs name="reason" label="Reason" value={form && form.reason ? form.reason : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.reason}/> 
              <Inputs name="status" label="Status" value={form && form.status ? form.status : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.status}/>
               
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

export default Leavess; //ok 