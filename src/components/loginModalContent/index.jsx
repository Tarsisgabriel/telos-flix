import React from "react";
import "./index.css";
import image from "./image.png";

function LoginModalContent() {
  return (
    <div className="loginModalContent">
      <div className="firstSection">
        Login
        <div className="imageContainer">
          <img width="295px" height="127px " src={image}></img>
        </div>
      </div>
      <div>Formulário</div>
    </div>
  );
}

export default LoginModalContent;
