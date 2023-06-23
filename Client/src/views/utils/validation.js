function validate(user) {
  const errors = {
    email: "",
    password: "",
  };

    if (!user.email) {
      errors.email = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      errors.email = "Email is invalid";
    } 
    
    if (user.email.length >= 35) {
      errors.email = "Invalid email";
    }
    if (!/\d/.test(user.password)) {
      errors.password = "Password must contain a number";
    }
    
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 6 || user.password.length > 10) {
      errors.password = "Password must be 6 to 10 characters";
    }
  
    return errors;
  }

  export default validate;