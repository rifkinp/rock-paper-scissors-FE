import React from "react";

export const Button = props => {
  let buttonTitle = "klik Me";
  if (props.p) {
    buttonTitle = props.p;
  }

  return (
    <div className="flex justify-center px-6 py-2">
      <button className="w-full bg-mandarin p-2 rounded-md mt-8 text-black">
        {buttonTitle}
      </button>
    </div>
  );
};
