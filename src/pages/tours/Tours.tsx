import { Box, Typography } from "@mui/material";
import Slides from "../../component/Slides";
import { topAbroad, topSales, topVenues } from "../../data/MockData";
import BookingForm from "../../component/BookingForm";

const Tours = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: 2,
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}>
        <Typography variant="h3" color="black">
          Tìm và đặt tours chỉ với 3 bước đơn giản!
        </Typography>

        <BookingForm
          locations={["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"]}
          onSubmit={(data) => console.log("Data form:", data)}
        />
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: 5,
        }}
      >
        {/* SLIDES TOP VENUE */}
        <Slides title="Top địa điểm hút khách" data={topVenues} />

        {/* SLIDES TOP ABROAD */}
        <Slides title="Top điểm đến nước ngoài" data={topAbroad} />
        
        {/* SLIDES TOP SALE */}
        <Slides title="Khuyến mãi HOT" data={topSales} />
      </Box>
    </Box>
  );
};

export default Tours;
