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
import { Link } from "react-router-dom";
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
          <Button
            component={Link}
            to="/tours"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Tours
          </Button>
          <Button
            component={Link}
            to="/tickets"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Vé xe
          </Button>
          <Button
            component={Link}
            to="/stations"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Nhà xe
          </Button>
          <Button
            component={Link}
            to="/sales"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Ưu đãi
          </Button>
          <Button
            component={Link}
            to="/tips"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Cẩm nang du lịch
          </Button>
          <Button
            component={Link}
            to="/news"
            sx={{ color: scrolled ? "text.secondary" : "white" }}
          >
            Tin tức
          </Button>
        </Box>

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
              // onChange={(e) => setQuery(e.target.value)}  <-- để tích hợp API sau này
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
