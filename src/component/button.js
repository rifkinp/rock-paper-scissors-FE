import React from "react";

export const Button = props => {
  let buttonTitle = "klik Me";
  if (props.p) {
    buttonTitle = props.p;
  }

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          color: "white",
          backgroundColor: "red",
          width: "100%",
          marginTop: "50px",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        {buttonTitle}
      </button>
    </div>
  );
};
