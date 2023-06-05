import React from "react";
import {Button} from "../components/Elements/Button";

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
      <Button />
    </div>
  );
};

export default Register;
