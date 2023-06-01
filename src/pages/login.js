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
        <div className="text-center text-orange-300">Title</div>
        <div className="text-center text-gray-300">Description</div>
        <div className="px-8 pb-16 pt-8">
          <div className="flex flex-col text-gray-300">
            <label>username :</label>
            <input className="h-8 rounded-md" />
          </div>
          <div className="flex flex-col text-gray-300">
            <label>password :</label>
            <input type="password" className="h-8 rounded-md" />
          </div>
          <Button p="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
