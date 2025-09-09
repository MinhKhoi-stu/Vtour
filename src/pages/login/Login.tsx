import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import FormField from "../../component/FormField";

interface LoginProps {
  dialogMode?: boolean;
  onClose?: () => void;
}

const Login: React.FC<LoginProps> = ({ dialogMode = false, onClose }) => {
  const navigate = useNavigate();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
    if (dialogMode && onClose) onClose();
  };

  const handleGuest = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
    if (dialogMode && onClose) onClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        // width: isMobile ? "100%" : 420,
        p: 4,
        bgcolor: "white",
        borderRadius: 4,
        boxShadow: 0,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Đăng nhập
      </Typography>

      <FormField placeholder="Email" type="email" icon={<AccountCircle />} />
      <FormField placeholder="Mật khẩu" type="password" icon={<LockIcon />} />

      <Box mt={2} display="flex" justifyContent="space-between" flexWrap="wrap">
        <label>
          <input type="checkbox" /> Ghi nhớ
        </label>
        <MuiLink component={Link} to="/forgotPassword" underline="hover">
          Quên mật khẩu
        </MuiLink>
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, bgcolor: "blueviolet", fontSize: "20px" }}
      >
        Đăng nhập
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
        Chưa có tài khoản?{" "}
        <MuiLink component={Link} to="/register" underline="hover">
          Đăng ký
        </MuiLink>
      </Typography> */}

      <Button
        fullWidth
        sx={{ mt: 2, bgcolor: "blueviolet", color: "white" }}
        onClick={handleGuest}
      >
        Tiếp tục với tư cách khách
      </Button>
    </Box>
  );
};

export default Login;
