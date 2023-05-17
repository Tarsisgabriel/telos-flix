import React, { useState } from "react";
import "./index.css";
import image from "./image.png";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import { AddBoxOutlined, Email } from "@mui/icons-material";
import PrimaryGradienteButton from "../primaryGradientButton";
import SecondaryGradientButton from "../secondaryGradientButton";
import CustomOutlinedInput from "../customOutlinedInput";
import PasswordOutlinedInput from "../passwordOutlinedInput";

function LoginModalContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginModalContent">
      <div className="firstSection">
        Login
        <div className="imageContainer">
          <img width="295px" height="127px " src={image} alt=""></img>
        </div>
      </div>
      <div className="secondSection">
        <FormControl sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer">
            <label className="inputLabel">E-mail</label>
            <CustomOutlinedInput
              setValue={setEmail}
              placeholder="E-mail"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <Email sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "30px" }}>
            <label className="inputLabel">Senha</label>
            <PasswordOutlinedInput setValue={setPassword} />
          </div>
          <div className="buttonsSection">
            <PrimaryGradienteButton text="Entrar" />
            <SecondaryGradientButton
              text="Quero criar uma conta"
              icon={<AddBoxOutlined />}
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default LoginModalContent;
