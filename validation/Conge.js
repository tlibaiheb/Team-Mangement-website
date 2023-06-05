const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLeave(data) {
  let errors = {};
  data.startDate = !isEmpty(data.startDate) ? data.startDate : "";
  data.endDate = !isEmpty(data.endDate) ? data.endDate : "";
  data.reason = !isEmpty(data.reason) ? data.reason : "";
  data.status = !isEmpty(data.status) ? data.status : "";
 
  if (validator.isEmpty(data.startDate)) {
    errors.startDate = "Required startDate";
  }

  if (validator.isEmpty(data.endDate)) {
    errors.endDate = "Required endDate";
  }


  if (validator.isEmpty(data.reason)) {
    errors.reason = "Required reason";
  }
 
  if (validator.isEmpty(data.status)) {
    errors.status = "Required status";
  }
 
   
  


  return {
      errors,
      isValid: isEmpty(errors)
  }
};