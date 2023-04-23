import React from "react";
import "./index.css";

function SecondaryGradientButton({ icon, text }) {
  return (
    <button className="secondaryGradientButton">
      {icon}
      {text}
    </button>
  );
}

export default SecondaryGradientButton;
