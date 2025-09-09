import { Box, Typography } from "@mui/material";
import Slides from "../../component/Slides";
import { topNews } from "../../data/MockData";

const News = () => {
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
          Những tin tức hot nhất trong ngày!!!
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: 5,
        }}
      >
        <Slides title="Top tin tức " data={topNews} />
      </Box>
    </Box>
  );
};

export default News;
