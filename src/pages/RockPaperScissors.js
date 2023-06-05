import React from "react";
import RpsImageContainer from "../components/Elements/RpsImageContainer";

const RockPaperScissors = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex w-full h-full">
        <div className="w-1/3 h-full flex flex-col justify-center items-center p-5 bg-gray-200">
          <div className="h-1/6 flex justify-center items-center">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Player1
            </h2>
          </div>
          <div className="h-5/6">
            <div className="">
              <img className="w-32 h-32 p-5 object-contain" />
              <RpsImageContainer src="./assets/batu.png" id="player-batu" />
            </div>
            <div className="">
              <img
                className="w-32 h-32 p-5 object-contain"
                src="./assets/kertas.png"
                id="player-kertas"
              />
            </div>
            <div className="">
              <img
                className="w-32 h-32 p-5 object-contain"
                src="./assets/gunting.png"
                id="player-gunting"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center items-center p-5 bg-gray-300">
          VS
        </div>

        <div className="w-1/3 h-full flex flex-col justify-center items-center p-5 bg-gray-200">
          <div>
            <h2>COM</h2>
          </div>
          <div>
            <div className="w-24 h-24 p-5">
              <img
                src="./assets/batu.png"
                className="w-full object-cover"
                id="com-batu"
              />
            </div>
            <div className="w-24 h-24 p-5">
              <img
                src="./assets/gunting.png"
                className="w-full object-cover"
                id="com-gunting"
              />
            </div>
            <div className="w-24 h-24 p-5">
              <img
                src="./assets/kertas.png"
                className="w-full object-cover"
                id="com-kertas"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 flex items-center justify-center flex">
        <img src="./assets/refresh.png" className="object-contain w-24 h-24" />
      </div>
    </section>
  );
};

export default RockPaperScissors;
