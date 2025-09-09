import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

type HeaderProps = {
  scrolled: boolean;
};

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  // const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={scrolled ? 2 : 0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid" : "none",
        borderColor: "divider",
        transition: "background-color 200ms ease, box-shadow 200ms ease",
        zIndex: (theme) => theme.zIndex.appBar + 2,
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, md: 64 },
          px: { xs: 2, md: 4 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/home"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textDecoration: "none",
            color: scrolled ? "inherit" : "common.white",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: 40,
              height: 40,
              marginRight: 8,
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: scrolled ? "blueviolet" : "white" }}
          >
            Vtour
          </Typography>
        </Box>

        {/* Right actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* price language (hidden on xs) */}
          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", md: "block" },
              color: scrolled ? "text.secondary" : "rgba(255,255,255,0.9)",
            }}
          >
            15.000 VND | VI
          </Typography>

          <Button
            color="inherit"
            size="small"
            sx={{
              color: scrolled ? "text.secondary" : "rgba(255,255,255,0.95)",
            }}
          >
            Hỗ trợ
          </Button>

          <Button
            color="inherit"
            size="small"
            sx={{
              color: scrolled ? "text.secondary" : "rgba(255,255,255,0.95)",
            }}
          >
            Đặt chỗ của tôi
          </Button>

          {/* Login / Register button */}
          <Button
            sx={{
              bgcolor: scrolled ? "transparent" : "rgba(255,255,255,0.12)",
              color: scrolled ? "blueviolet" : "white",
              transition: "transform 0.18s ease, background-color 0.18s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: scrolled
                  ? "transparent"
                  : "rgba(255,255,255,0.16)",
                color: scrolled ? "blueviolet" : "white",
              },
            }}
            variant={scrolled ? "text" : "contained"}
            size="small"
            // component={Link}
            // to="/login"
            onClick={() => setOpenLogin(true)}
          >
            Đăng nhập
          </Button>

          <Button
            variant="contained"
            size="small"
            // component={Link}
            // to="/register"
            onClick={() => setOpenRegister(true)}
            sx={{
              bgcolor: "blueviolet",
              color: "white",
              transition: "transform 0.18s ease, background-color 0.18s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "blueviolet",
                color: "white",
              },
            }}
          >
            Đăng ký
          </Button>

          <Button
            component={Link}
            to="/cart"
            sx={{
              color: scrolled ? "text.secondary" : "rgba(255,255,255,0.95)",
              transition: "transform 0.18s ease, background-color 0.18s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: scrolled
                  ? "transparent"
                  : "rgba(255,255,255,0.06)",
                color: scrolled ? "text.secondary" : "white",
              },
            }}
            aria-label="cart"
          >
            <ShoppingCartIcon />
          </Button>

          <Button
            sx={{
              color: scrolled ? "blueviolet" : "rgba(255,255,255,0.95)",
              transition: "transform 0.18s ease, background-color 0.18s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: scrolled
                  ? "transparent"
                  : "rgba(255,255,255,0.06)",
                color: scrolled ? "blueviolet" : "white",
              },
            }}
            aria-label="profile"
          >
            <AccountCircle />
          </Button>
        </Box>
      </Toolbar>

      {/* Dialog Login */}
      <Dialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        fullWidth
        // maxWidth="xs"
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Login dialogMode onClose={() => setOpenLogin(false)} />
        </DialogContent>
      </Dialog>

      {/* Dialog Register */}
      <Dialog
        open={openRegister}
        onClose={() => setOpenRegister(false)}
        fullWidth
        // maxWidth="xs"
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Register dialogMode onClose={() => setOpenRegister(false)} />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
