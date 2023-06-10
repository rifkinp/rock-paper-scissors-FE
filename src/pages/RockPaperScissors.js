import React from "react";
import RpsImageContainer from "../components/Elements/RpsImageContainer";
import IMAGES from "../components/Assets";
import RpsChoices from "../components/Fragments/RpsChoices";

const RockPaperScissors = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex w-full h-full">
        <RpsChoices title="Player1" id="player1" />

        <div className="w-1/3 h-full flex flex-col justify-center items-center p-5 bg-gray-900">
          <div className="flex justify-center items-center h-2/3 text-2xl font-bold text-center text-mandarin">
            VS
          </div>
          <div className="flex justify-center items-center h-2/3 text-2xl font-bold text-center text-mandarin">
            WIN
          </div>
          <div className="flex justify-center items-center h-2/3 text-2xl font-bold text-center text-mandarin">
            LOSE
          </div>
          <div className="h-1/3 w-full flex items-center justify-center mb-5">
            <RpsImageContainer src={IMAGES.RpsRefresh} id="player-kertas" />
          </div>
        </div>

        <RpsChoices title="Player2" id="player2" />
      </div>
    </section>
  );
};

export default RockPaperScissors;
