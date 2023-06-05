import React from "react";
import {DefaultProfile} from "../components/Elements/DefaultProfile";
import Button from "../components/Elements/Button";
import UserProfile from "../components/Fragments/UserProfile";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full bg-gray-400 p-5">
        <span className="text-mandarin text-2xl font-bold my-5">
          Play VS Computer Room
        </span>
        <div className="border-2 my-5"></div>
        <span className="text-gray-900 text-2xl font-bold my-5">
          Create New Room
        </span>
        <div className="flex flex-row flex-wrap">
          <div className="p-5 my-5 bg-gray-200 m-5 w-60 h-32 rounded-md">
            <span className="text-mandarin text-xl font-bold">Room A</span>
            <div>Winner : Username</div>
            <div>Status Room : Completed</div>
          </div>
          <div className="p-5 my-5 bg-gray-200 m-5 w-60 h-32 rounded-md">
            <span className="text-mandarin text-xl font-bold">Room A</span>
            <div>Winner : Username</div>
            <div>Status Room : Completed</div>
          </div>
          <div className="p-5 my-5 bg-gray-200 m-5 w-60 h-32 rounded-md">
            <span className="text-mandarin text-xl font-bold">Room A</span>
            <div>Winner : Username</div>
            <div>Status Room : Completed</div>
          </div>
          <div className="p-5 my-5 bg-gray-200 m-5 w-60 h-32 rounded-md">
            <span className="text-mandarin text-xl font-bold">Room A</span>
            <div>Winner : Username</div>
            <div>Status Room : Completed</div>
          </div>
          <div className="p-5 my-5 bg-gray-200 m-5 w-60 h-32 rounded-md">
            <span className="text-mandarin text-xl font-bold">Room A</span>
            <div>Winner : Username</div>
            <div>Status Room : Completed</div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full bg-gray-900 flex flex-col justify-center items-center">
        <div className="mt-5">
          <DefaultProfile />
        </div>
        <div></div>
        <UserProfile />
      </div>
    </div>
  );
}
