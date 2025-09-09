import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PasswordIcon from "@mui/icons-material/Password";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormField from "../../component/FormField";

interface RegisterProps {
  dialogMode?: boolean;
  onClose?: () => void;
}

const Register: React.FC<RegisterProps> = ({ dialogMode = false, onClose }) => {
  const navigate = useNavigate();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBack = () => {
    if (dialogMode && onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        // width: isMobile ? "100%" : 420,
        p: 4,
        bgcolor: "white",
        borderRadius: 4,
        boxShadow: 0,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <ArrowBackIcon onClick={handleBack} sx={{ cursor: "pointer", mb: 0 }} />
      </Box>

      <Typography variant="h4" fontWeight="bold" mb={3}>
        Đăng ký
      </Typography>

      <FormField placeholder="Email" type="text" icon={<AccountCircle />} />
      <FormField placeholder="Mật khẩu" type="password" icon={<LockIcon />} />
      <FormField
        placeholder="Nhập lại mật khẩu"
        type="password"
        icon={<PasswordIcon />}
      />

      <Button
        fullWidth
        sx={{ mt: 2, bgcolor: "blueviolet", color: "white", fontSize: "20px" }}
      >
        Đăng ký
      </Button>

      <Divider sx={{ my: 2 }}>Hoặc</Divider>

      <Box
        mb={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <FacebookIcon sx={{ cursor: "pointer" }} />
        <XIcon sx={{ cursor: "pointer" }} />
        <GoogleIcon sx={{ cursor: "pointer" }} />
      </Box>

      {/* <Typography variant="body2">
        Đã có tài khoản?{" "}
        <MuiLink component={Link} to="/login" underline="hover">
          Đăng nhập
        </MuiLink>
      </Typography> */}

      <Button fullWidth sx={{ mt: 2, bgcolor: "blueviolet", color: "white" }}>
        Tiếp tục với tư cách khách
      </Button>
    </Box>
  );
};

export default Register;
