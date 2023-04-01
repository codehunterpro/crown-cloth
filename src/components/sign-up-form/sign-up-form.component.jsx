import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../buttons/buttons.component";

import {
  createUserAuthWithEmailAndPassword,
  createUserAuthDoc,
} from "../../utils/firebase.utils";

const defaultInputValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUpForm = () => {
  const [formValueObj, setFormValueObj] = useState(defaultInputValues);

  const { name, email, password, confirmPassword } = formValueObj;


const resetForm = () => {
  setFormValueObj(defaultInputValues);
}

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValueObj({ ...formValueObj, [name]: value });
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Your Password Did not match");
    }
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserAuthDoc(user, { displayName: name });
      // RESET THE FORM
       resetForm();

    } catch (err) {
      console.log("User Happended an error", err.message);
    }
  };



  return (
    <div className="form_container">
      <h2>Don't Have an Account</h2>
      <span>Signup With Your Email</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="name"
          onChange={onChangeHandle}
          value={name}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={onChangeHandle}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={onChangeHandle}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={onChangeHandle}
          value={confirmPassword}
        />
        <Button type="submit"> SIGN UP </Button>
      </form>
     
    </div>
  );
};
export default SignUpForm;
