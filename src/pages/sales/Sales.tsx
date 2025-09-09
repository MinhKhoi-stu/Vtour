import { Box, Typography } from "@mui/material";
import Slides from "../../component/Slides";
import { topSales } from "../../data/MockData";

const Sales = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h3" color="black">
          Những ưu đãi dành riêng cho bạn!!!
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: 5,
        }}
      >
        <Slides title="Khuyến mãi hot" data={topSales} />
      </Box>
    </Box>
  );
};

export default Sales;
