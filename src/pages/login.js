import React from "react";
import {Button} from "../components/button";

export const Login = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "red",
          height: "100%",
          display: "flex",
        }}
      >
        tes
      </div>
      <div
        style={{
          backgroundColor: "lightGrey",
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            padding: "40px 40px 80px",
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
    </div>
  );
};

export default Login;
