import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

export const Login = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default Login;
