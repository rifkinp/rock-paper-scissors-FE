import React from "react";
import {Button} from "./button";

export const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "lightGrey",
        padding: "40px",
        width: "30%",
        borderRadius: "30px",
      }}
    >
      <div
        style={{
          paddingBottom: "30px",
          textAlign: "center",
        }}
      >
        Login <br />
        <br />
        Please login if you want to access
      </div>
      <div
        style={{
          padding: "0 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>username :</label>
          <input
            style={{
              borderRadius: "12px",
              height: "30px",
              borderStyle: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>password :</label>
          <input
            type="password"
            style={{
              borderRadius: "12px",
              height: "30px",
              borderStyle: "none",
            }}
          />
        </div>
        <Button p="Login" />
      </div>
    </div>
  );
};

export default Login;
