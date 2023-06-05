import React from "react";
import profileDefault from "../Assets/profile-default.svg";

export const DefaultProfile = () => {
  return (
    <img src={profileDefault} className="w-28 h-28 mx-5" alt="profile"></img>
  );
};
