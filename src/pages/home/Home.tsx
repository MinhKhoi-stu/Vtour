import React from "react";
import { Box, Typography } from "@mui/material";
import SlidesGroup from "../../component/SlidesGroup";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: { xs: "column", md: "row" },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Hình ảnh ưu đãi demo */}
      <Box
        sx={{
          backgroundImage: "url('/pur_sakura.png')",
          borderRadius: 2,
          boxShadow: 3,
          width: { xs: "100%", md: 1200 },
          height: { xs: "auto", md: 300 },
        }}
      >
        <Box
          sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "white", mb: 1 }}
          >
            Ưu đãi xuống đến 0%
          </Typography>
        </Box>
      </Box>
      <SlidesGroup/>
    </Box>
  );
};

export default Home;
