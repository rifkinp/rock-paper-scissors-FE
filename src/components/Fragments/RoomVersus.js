import React from "react";

const RoomVersus = props => {
  const {title, winner, status} = props;
  return (
    <div className="p-5 my-5 bg-gray-900 m-5 w-60 h-32 rounded-md">
      <span className="text-mandarin text-xl font-bold">{title}</span>
      <div className="text-white">
        <div>Winner : {winner}</div>
        <div>Status Room : {status}</div>
      </div>
    </div>
  );
};

export default RoomVersus;
