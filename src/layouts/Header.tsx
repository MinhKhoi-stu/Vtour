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
import { NavLink, Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

type HeaderProps = {
  scrolled: boolean;
};

const menuItems = [
  { label: "Hủy vé", path: "/cancellation" },
  { label: "Đặt chỗ của tôi", path: "/booking" },
  { label: "Giỏ hàng", path: "/cart", icon: <ShoppingCartIcon /> },
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
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
          {/* price language */}
          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", md: "block" },
              color: scrolled ? "text.secondary" : "rgba(255,255,255,0.9)",
            }}
          >
            15.000 VND | VI
          </Typography>

          {/* Menu buttons */}
          {menuItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              size="small"
              sx={{
                color: scrolled ? "rgba(0,0,0,0.7)" : "white",
                borderRadius: 2,
                px: item.icon ? 1 : 2,
                minWidth: item.icon ? 40 : undefined,
                "&.active": {
                  backgroundColor: "rgba(137, 43, 226, 0.62)",
                  color: "white",
                  fontWeight: "bold",
                },
                "&:hover": {
                  backgroundColor: "rgba(138,43,226,0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {item.icon ? item.icon : item.label}
            </Button>
          ))}

          {/* Login / Register */}
          <Button
            sx={{
              bgcolor: scrolled ? "transparent" : "rgba(255,255,255,0.12)",
              color: scrolled ? "blueviolet" : "white",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: scrolled
                  ? "transparent"
                  : "rgba(255,255,255,0.16)",
              },
            }}
            variant={scrolled ? "text" : "contained"}
            size="small"
            onClick={() => setOpenLogin(true)}
          >
            Đăng nhập
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => setOpenRegister(true)}
            sx={{
              bgcolor: "blueviolet",
              color: "white",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "blueviolet",
              },
            }}
          >
            Đăng ký
          </Button>

          <Button
            sx={{
              color: scrolled ? "blueviolet" : "rgba(255,255,255,0.95)",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgba(138,43,226,0.1)",
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
