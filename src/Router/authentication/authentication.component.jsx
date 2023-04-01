import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentiacation.styles.scss"
const Authentication = () => {


  return (
    <div className="authentication_container">
      
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
