import React from "react";
import IMAGES from "../components/Assets";

// const Home = () => {
//   return (
//     <div className="w-full h-full">
//       <img
//         src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//         className="w-full object-cover bg-center"
//         alt=""
//       />
//     </div>
//   );
// };
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
      <div
        className="w-48 h-48 bg-no-repeat bg-center object-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(${IMAGES.RpsLogo})`,
        }}></div>
      <span className="text-2xl font-bold text-metal mb-10 text-center">
        "Unleash Your Strategy and Conquer with Rock, Paper, Scissors!"
      </span>
    </div>
  );
};

export default Home;
