import React from "react";
import { SignUp } from '@clerk/clerk-react'
import "./signUp.css"
const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  );
};

export default SignUpPage;