import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { stations, topAbroad, topVenues } from "../../data/MockData";
import BookingForm from "../../component/BookingForm";
import Slides from "../../component/Slides";
import SlidesGroup from "../../component/SlidesGroup";

const StationBooking: React.FC = () => {
  const { stationId } = useParams<{ stationId: string }>();

  const station = stations.find((s) => s.id === stationId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: 3,
      }}
    >
      <Typography variant="h4" color="black">
        Trang đặt vé cho nhà xe {station ? station.name : "Không tìm thấy ga"}
      </Typography>

      <BookingForm
        locations={["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"]}
        onSubmit={(data) => console.log("Data form:", data)}
      />

      <Box
        sx={{
          textAlign: "left",
          mt: 5,
        }}
      >
        {/* SLIDES GROUP */}
        <SlidesGroup/>
      </Box>
    </Box>
  );
};

export default StationBooking;
