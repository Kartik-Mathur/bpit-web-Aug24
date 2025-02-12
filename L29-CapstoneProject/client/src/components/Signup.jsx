import React from "react";
import { useAuth } from "../context/AuthProvider";

const Signup = () => {
  const { currentUser, signIn, signUp } = useAuth();

  return <div></div>;
};

export default Signup;
