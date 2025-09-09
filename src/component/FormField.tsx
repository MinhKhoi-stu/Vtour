import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface FormFieldProps {
  type?: "text" | "password" | "email";
  placeholder: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  type = "text",
  placeholder,
  icon,
  fullWidth = true,
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <TextField
      type={isPassword ? (show ? "text" : "password") : type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth={fullWidth}
      margin="normal"
      sx={{ backgroundColor: "white", borderRadius: 2 }}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined,
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow((s) => !s)}>
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
};

export default FormField;
