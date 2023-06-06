import React from "react";
import RpsImageContainer from "../components/Elements/RpsImageContainer";
import IMAGES from "../components/Assets";
import Button from "../components/Elements/Button";

const CreateRoom = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center bg-metal">
      <div>
        <div className="text-2xl font-bold text-mandarin mb-10 text-center">
          Input game room name
        </div>
        <div className="text-xl font-semibold text-gray-800 mb-10 text-center">
          Your Choice
        </div>
      </div>
      <div className="w-100 flex gap-20">
        <RpsImageContainer src={IMAGES.RpsBatu} id="player1" />
        <RpsImageContainer src={IMAGES.RpsKertas} id="player1" />
        <RpsImageContainer src={IMAGES.RpsGunting} id="player1" />
      </div>
      <div className="mb-20">
        <Button title="Create Room" variant="bg-mandarin" />
      </div>
    </div>
  );
};

export default CreateRoom;
