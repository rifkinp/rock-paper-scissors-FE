import React from "react";
import IMAGES from "../components/Assets";

// const Testos = () => {
//   return (
//     <div className="w-full h-full bg-no-repeat bg-center object-cover flex justify-center items-center">
//       <div
//         className="w-full h-full flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover"
//         style={{backgroundImage: `url(${IMAGES.BackgroundWow})`}}
//       >
//         <form className="z-10">
//           <div>
//             <label>username</label>
//             <input placeholder="username"></input>
//           </div>
//           <div>
//             <label>Password</label>
//             <input placeholder="******"></input>
//           </div>
//           <div>
//             <label>Email</label>
//             <input placeholder="Email"></input>
//           </div>
//         </form>
//         <div className="absolute z-0 bg-indigo-200/60 blur-sm w-[400px] h-[500px] rounded-[20px] flex flex-col justify-center items-center"></div>
//       </div>
//     </div>
//   );
// };
const Testos = () => {
  return (
    <div className="w-full h-full bg-no-repeat bg-center object-cover flex justify-center items-center">
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover"
        style={{backgroundImage: `url(${IMAGES.BackgroundWow})`}}
      >
        <div className="bg-indigo-200/60 backdrop-blur w-[400px] h-[500px] rounded-[20px] flex flex-col justify-center items-center">
          <form className="">
            <div>
              <label>username</label>
              <input placeholder="username"></input>
            </div>
            <div>
              <label>Password</label>
              <input placeholder="******"></input>
            </div>
            <div>
              <label>Email</label>
              <input placeholder="Email"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testos;
