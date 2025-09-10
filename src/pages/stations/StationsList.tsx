// src/pages/StationList.tsx
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { stations } from "../../data/MockData";

const StationList: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Typography variant="h3" color="black">
          Các nhà xe hiện hành
        </Typography>
      </Box>

      <Box>
        {stations.map((station) => (
          <Link
            key={station.id}
            to={`/stations/${station.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="h5" sx={{ mb: 2, cursor: "pointer" }}>
              {station.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default StationList;
