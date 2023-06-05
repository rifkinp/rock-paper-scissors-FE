import React from "react";

const RpsImageContainer = props => {
  const {src, id} = props;
  return (
    <img
      className="w-32 h-32 p-5 object-contain"
      src={src}
      id={id}
    />
  );
};

export default RpsImageContainer;
