import React, { useState } from "react";
import CustomOutlinedInput from "../customOutlinedInput";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordOutlinedInput({ setValue, placeholder }) {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const onIconButtonClicked = () => {
    setShouldShowPassword((previous) => !previous);
  };
  return (
    <CustomOutlinedInput
      setValue={setValue}
      placeholder={placeholder ?? "Senha"}
      type={shouldShowPassword ? "text" : "password"}
      startAdornment={
        <InputAdornment>
          <IconButton onClick={onIconButtonClicked}>
            {shouldShowPassword ? (
              <VisibilityOff sx={{ color: "#EEEEEE" }} />
            ) : (
              <Visibility sx={{ color: "#EEEEEE" }} />
            )}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

export default PasswordOutlinedInput;
