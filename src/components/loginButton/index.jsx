import React from "react";
import PrimaryGradientButton from "../primaryGradientButton";
import { PersonOutline } from "@mui/icons-material";

export default function LoginButton() {
  return <PrimaryGradientButton text="Fazer login" icon={<PersonOutline />} />;
}
