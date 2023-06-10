import React from "react";
import IMAGES from "../components/Assets";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
      <div
        className="w-48 h-48 bg-no-repeat bg-center object-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(${IMAGES.RpsLogo})`,
        }}
      ></div>
      <span className="text-2xl font-bold text-metal mb-10 text-center">
        "Unleash Your Strategy and Conquer with Rock, Paper, Scissors!"
      </span>
    </div>
  );
};

export default Home;
