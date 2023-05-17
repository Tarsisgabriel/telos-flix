import React from "react";
import "./index.css";
import image from "./image.png";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { AddBoxOutlined, Email, Visibility } from "@mui/icons-material";
import PrimaryGradienteButton from "../primaryGradientButton";
import SecondaryGradientButton from "../secondaryGradientButton";

function LoginModalContent() {
  return (
    <div className="loginModalContent">
      <div className="firstSection">
        Login
        <div className="imageContainer">
          <img width="295px" height="127px " src={image}></img>
        </div>
      </div>
      <div className="secondSection">
        <FormControl sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer">
            <label className="inputLabel">E-mail</label>
            <OutlinedInput
              sx={{
                background: "rgba(238, 238, 238, 0.05)",
                color: "#EEEEEE",
                border: "1px solid rgba(238, 238, 238, 0.05)",
                boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.05)",
                borderRadius: "14px",
              }}
              placeholder="Email"
              id="filled-adornment-username"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <Email sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
          </div>

          <div className="inputContainer" style={{ marginTop: "30px" }}>
            <label className="inputLabel">Senha</label>
            <OutlinedInput
              sx={{
                background: "rgba(238, 238, 238, 0.05)",
                color: "#EEEEEE",
                border: "1px solid rgba(238, 238, 238, 0.05)",
                boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.05)",
                borderRadius: "14px",
              }}
              placeholder="Senha"
              id="filled-adornment-password"
              type="password"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <Visibility sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
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
