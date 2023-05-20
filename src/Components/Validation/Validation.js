const validation = (userData) => {
  const errors = {};

  if (!/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
    errors.email = "Invalid email";
  }

  if (!userData.email) {
    errors.email = "Must introduce a valid email";
  }

  if (userData.email.length > 35) {
    errors.email = "Email must not exceed 35 characters";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Password must have at least an number";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters";
  }

  return errors;
};

export default validation;
