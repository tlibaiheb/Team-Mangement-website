const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

  data.type = !isEmpty(data.type) ? data.type : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.dueDate = !isEmpty(data.dueDate) ? data.dueDate : "";
 
  if (validator.isEmpty(data.type)) {
    errors.tel = "Required type";
  }
 
  if (validator.isEmpty(data.description)) {
    errors.city = "Required description";
  }
 
   
  


  return {
      errors,
      isValid: isEmpty(errors)
  }
};