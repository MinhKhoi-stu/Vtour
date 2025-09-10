import { Box, Typography } from "@mui/material";
import BookingForm from "../../component/BookingForm";
import Slides from "../../component/Slides";
import { topAbroad, topNews, topSales, topVenues } from "../../data/MockData";

const Tickets = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          gap: 2,
        }}
      >
        <Typography variant="h3" color="black">
          Tìm và đặt vé chỉ với 3 bước đơn giản!
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

        {/* SLIDES TOP SALE */}
        <Slides title="Top tin tức" data={topNews} />
      </Box>
    </Box>
  );
};

export default Tickets;
