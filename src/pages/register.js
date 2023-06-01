import React from "react";
import {Button} from "./button";

export const Register = () => {
  return (
    <div style={{}}>
      <div>Register Forms</div>
      <div>
        <label>username</label>
        <input />
      </div>
      <div>
        <label>email</label>
        <input type="email" />
      </div>
      <div>
        <label>password</label>
        <input type="password" />
      </div>
      <Button p="Register" />
    </div>
  );
};

export default Register;
