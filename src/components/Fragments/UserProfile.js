import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const UserProfile = () => {
  return (
    <div className="w-full h-full px-10 flex justify-center">
      <form action="">
        <InputForm
          title="Username"
          name="userName"
          placeholder="rpsgames"
          type="text"
          disable
        />
        <InputForm
          title="Fullname"
          name="fullName"
          placeholder="Hj. Latunrung Corps"
          type="text"
        />
        <InputForm
          title="Email"
          name="email"
          placeholder="example@example.com"
          type="email"
        />
        <InputForm
          title="Phone Number"
          name="phoneNumber"
          placeholder="080989999"
          type="text"
        />
        <InputForm
          title="Address"
          name="address"
          placeholder="Jl. Sukorejo"
          type="text"
        />
        <Button title="Update Profile" variant="bg-mandarin" />
        <Button title="GameHistory" variant="bg-mandarin" />
      </form>
    </div>
  );
};

export default UserProfile;
