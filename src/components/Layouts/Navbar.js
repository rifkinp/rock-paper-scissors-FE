import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="p-5 text-mandarin bg-gray-600 cursor-pointer flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold">RPS Game</span>
        </div>
        <ul className="flex items-center justify-between gap-10">
          <li>
            <Link
              to={"/dashboard"}
              className="text-xl hover:text-metal duratin-500"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className="text-xl hover:text-metal duratin-500"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/registration"}
              className="text-xl hover:text-metal duratin-500"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to={"/rockpaperscissors"}
              className="text-xl hover:text-metal duratin-500"
            >
              Rock Paper Scissors
            </Link>
          </li>
          <li>
            <Link
              to={"/create-room"}
              className="text-xl hover:text-metal duratin-500"
            >
              Create Room
            </Link>
          </li>
          <li>
            <Link
              to={"/game-history"}
              className="text-xl hover:text-metal duratin-500"
            >
              Game History
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
