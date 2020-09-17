const dobRegex = RegExp(
  /^((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/((?:0[1-9])|(?:1[0-2]))\/((?:19|20)\d{2})$/
);

const validate = ({ firstname, lastname, dob, austate }) => {
  let errors = {};

  if (firstname.length > 50) errors.firstname = 'maximum 50 characaters';
  
  if (lastname.length > 50 || lastname.length === 0) errors.lastname = 'maximum 50 characaters and required';

  if (!dobRegex.test(dob)) errors.dob = 'invalid date of birth';
  
  if (austate === '') errors.austate = 'please select one state';

  return errors;
};

export default validate;
