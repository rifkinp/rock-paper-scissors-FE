import React from "react";

export const Button = props => {
  let buttonTitle = "klik Me";
  if (props.p) {
    buttonTitle = props.p;
  }

  return (
    <div className="flex">
      <button className="w-full bg-red-600 p-2 rounded-md mt-8 text-white">
        {buttonTitle}
      </button>
    </div>
  );
};
