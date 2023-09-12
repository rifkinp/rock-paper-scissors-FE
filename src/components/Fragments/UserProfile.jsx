import React, {useState} from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import {Link} from "react-router-dom";

const UserProfile = () => {
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    if (disabled === false) {
      setDisabled(true);
    } else setDisabled(false);
  };

  return (
    <div className="w-full h-full px-10 flex justify-center">
      <form className="w-full max-w-md">
        <InputForm
          title="Username"
          name="userName"
          placeholder="rpsgames"
          type="text"
          disabled={disabled}
        />
        <InputForm
          title="Fullname"
          name="fullName"
          placeholder="Hj. Latunrung Corps"
          type="text"
          disabled={disabled}
        />
        <InputForm
          title="Email"
          name="email"
          placeholder="example@example.com"
          type="email"
          disabled={disabled}
        />
        <InputForm
          title="Phone Number"
          name="phoneNumber"
          placeholder="080989999"
          type="text"
          disabled={disabled}
        />
        <InputForm
          title="Address"
          name="address"
          placeholder="Jl. Sukorejo"
          type="text"
          disabled={disabled}
        />
        <div className="flex justify-center">
          <Button
            title={disabled === true ? "Update Profile" : "Submit"}
            variant="bg-mandarin"
            onClick={handleClick}
          />
          <Link to={"/game-history"}>
            <Button title="Game History" variant="bg-mandarin" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
