import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Stations = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color="black" textAlign="left">
          Các nhà xe hiện hành
        </Typography>

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
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Stations;
