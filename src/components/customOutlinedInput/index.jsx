import { OutlinedInput } from "@mui/material";
import React from "react";

function CustomOutlinedInput({ startAdornment, placeholder, type, setValue }) {
  const onChangedValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <OutlinedInput
      sx={{
        background: "rgba(238, 238, 238, 0.05)",
        color: "#EEEEEE",
        border: "1px solid rgba(238, 238, 238, 0.05)",
        boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.05)",
        borderRadius: "14px",
      }}
      placeholder={placeholder}
      type={type}
      startAdornment={startAdornment}
      onChange={onChangedValue}
    ></OutlinedInput>
  );
}

export default CustomOutlinedInput;
