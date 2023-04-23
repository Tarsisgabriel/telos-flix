import React from "react";
import SecondaryGradientButton from "../secondaryGradientButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export default function CreatAccountButton() {
  return (
    <SecondaryGradientButton text="Criar conta" icon={<AddBoxOutlinedIcon />} />
  );
}
