import React from "react";

export const Button = props => {
  const {title, variant = "bg-black"} = props;
  return (
    <button
      className={`${variant} h-10 px-12 rounded-md text-black`}
      type="submit"
    >
      {title}
    </button>
  );
};
