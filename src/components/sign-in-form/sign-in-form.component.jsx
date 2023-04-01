import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../buttons/buttons.component";

import {

 
  directLogInWithEmailandPassword,
} from "../../utils/firebase.utils";

import { signInWithGooglePopup } from "../../utils/firebase.utils";
const defaultInputValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValueObj, setFormValueObj] = useState(defaultInputValues);

 

  const { email, password } = formValueObj;



  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValueObj({ ...formValueObj, [name]: value });
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    try {
     await directLogInWithEmailandPassword(email, password);  
      resetForm();
    } catch (err) {
      console.log("User Happended an error", err.message);
    }
  };

  const resetForm = () => {
    setFormValueObj(defaultInputValues);
  };

  const signUpWithGoogle = async () => {
   await signInWithGooglePopup();
    
  };

  return (
    <div className="form_container">
      <h2>Already Have an Account</h2>
      <span>Sign In With Your Email & Password</span>
      <form onSubmit={onSubmitHandle}>
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
        <div className="buttons_container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signUpWithGoogle}>
            SIGNIN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
