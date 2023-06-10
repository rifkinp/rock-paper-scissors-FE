import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="p-3 text-mandarin bg-gray-800 cursor-pointer flex justify-between items-center drop-shadow-lg">
        <div>
          <Link to={"/"}>
            <span className="text-2xl font-bold">RPS Game</span>
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-2">
          <Link to={"/dashboard"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Dashboard
            </li>
          </Link>
          <Link to={"/login"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Login
            </li>
          </Link>
          <Link to={"/registration"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Register
            </li>
          </Link>
          <Link to={"/rockpaperscissors"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Versus Com
            </li>
          </Link>
          <Link to={"/create-room"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Create Room
            </li>
          </Link>
          <Link to={"/game-history"} className="text-lg font-medium">
            <li className=" w-32 justify-center flex py-4 px-2 rounded-xl hover:bg-gray-600 duration-500">
              Game History
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
