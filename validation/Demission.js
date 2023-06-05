const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateResignation(data) {
  let errors = {};

  data.reason = !isEmpty(data.reason) ? data.reason : "";
  data.type = !isEmpty(data.type) ? data.type : "";
 
  if (validator.isEmpty(data.reason)) {
    errors.reason = "Required reason";
  }
 
  if (validator.isEmpty(data.type)) {
    errors.type = "Required type";
  }
 
   
  


  return {
      errors,
      isValid: isEmpty(errors)
  }
};