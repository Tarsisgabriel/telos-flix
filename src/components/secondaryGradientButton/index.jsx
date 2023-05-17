import React from "react";
import "./index.css";

function SecondaryGradientButton({ icon, text, onClick }) {
  return (
    <button onClick={onClick} className="secondaryGradientButton">
      {icon}
      {text}
    </button>
  );
}

export default SecondaryGradientButton;
