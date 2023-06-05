/*import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Formm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Formm;*/

/*import React from 'react'
import Inputs from '../../components/Inputs'

function Profiless() {
  return (




    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">

        <div className="col-lg-6 col-md-12 mt-4">
          <div id="isso" className="d-flex">
            <i id="isso" className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
            <form>
              <Inputs name="tel" label="Telephone"  type="text"/>
              <Inputs name="city" label="City" type="text" />
              <Inputs name="country" label="Country" type="text"  />
              <Inputs name="bio" label="Bio" type="text"  />
              <Inputs name="postalcode" label="PostalCode"  type="text"/>
              <div className=" mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <textarea type="text" className="form-control" name="address"></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">Update <i className="fa-solid fa-floppy-disk"></i></button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>


  )
} */


import React, { useEffect, useState } from "react";
import Inputs from "../../components/Inputs";
import { useDispatch, useSelector } from 'react-redux'
import Classnames from 'classnames'
import { AddProfile, GetProfile } from "../../redux/actions/profileActions";
 function Profiless() {
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
  dispatch(AddProfile(form, setShow, setMessage))
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
            <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmit}>
              <Inputs name="tel" label="Telephone" value={form && form.tel ? form.tel : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.tel}/>
              <Inputs name="city" label="City" value={form && form.city ? form.city : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.city}/>
              <Inputs name="country" label="Country" value={form && form.country ? form.country : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.country}/>
              <Inputs name="bio" label="Bio" type="text" value={form && form.bio ? form.bio : ""} onChangeHandler={onChangeHandler} errors={errors.bio}/>
              <Inputs name="postalcode" label="PostalCode" value={form && form.postalcode ? form.postalcode : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.postalcode}/>
              <div className=" mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <textarea
                    type="text"
                    className={Classnames("form-control", {"is-invalid": errors.address})}
                    name="address"
                    onChange={onChangeHandler}
                    value={form && form.address ? form.address : ""}
                  ></textarea>
                  {
                    errors.address && (<div  className="invalid-feedback">
                    {errors.address}
                  </div>)
                  }
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Update <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiless; 

