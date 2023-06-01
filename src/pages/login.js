import React from "react";
import {Button} from "../components/Elements/Button";

export const Login = () => {
  return (
    <div className="mx-auto flex w-full h-screen">
      <div className="mx-auto flex w-1/2 h-full">
        <img
          src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="mx-auto flex flex-col justify-center w-1/2 h-screen bg-gray-950">
        <div className="text-center text-mandarin text-2xl">Welcome back!</div>
        <div className="text-center text-metal">
          Login and pick your weapon!
        </div>
        <div className="p-16">
          <div className="flex flex-col text-metal py-2 px-6">
            <label>username :</label>
            <input className="h-8 rounded-md border-2 bg-transparent border-metal" />
          </div>
          <div className="flex flex-col text-metal px-6">
            <label>password :</label>
            <input
              type="password"
              className="h-8 rounded-md bg-transparent border-2 border-metal"
            />
          </div>
          <Button p="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
