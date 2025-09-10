import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  InputBase,
  IconButton,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router-dom"; // ✅ thay vì Link
import SearchIcon from "@mui/icons-material/Search";

type NavbarProps = {
  scrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={scrolled ? 1 : 0}
      sx={{
        top: { xs: 56, md: 64 },
        left: 0,
        right: 0,
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(0,0,0,0.18)",
        borderBottom: scrolled ? "1px solid" : "none",
        borderColor: "divider",
        transition: "background-color 200ms ease, box-shadow 200ms ease",
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    >
      <Toolbar sx={{ minHeight: 48, px: { xs: 2, md: 4 }, gap: 2 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexGrow: 1 }}>
          {[
            { label: "Tours", path: "/tours" },
            { label: "Vé xe", path: "/tickets" },
            { label: "Nhà xe", path: "/stations" },
            { label: "Ưu đãi", path: "/sales" },
            { label: "Cẩm nang du lịch", path: "/tips" },
            { label: "Tin tức", path: "/news" },
          ].map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                color: scrolled ? "rgba(0,0,0,0.7)" : "white",
                borderRadius: 2,
                px: 2,
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
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Search box */}
        <Box sx={{ width: { xs: "100%", sm: "auto" }, maxWidth: 300 }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", sm: 280 },
              borderRadius: 3,
              boxShadow: 1,
              bgcolor: "white",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: call API tìm kiếm ở đây
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "secondary" }}
              placeholder="Tìm kiếm..."
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
