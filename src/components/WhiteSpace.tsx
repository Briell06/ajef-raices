import BG from "../assets/bg.jpg";
import { Box, Typography } from "@mui/material";

function WhiteSpace() {
  return (
    <Box
      height="40vh"
      sx={{
        backgroundImage: `linear-gradient(#001805, transparent),url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        alignContent: "center",
      }}
    >
      <Typography variant="h1" align="center" color="white" fontWeight="bold">
        Proyecto Ajef Raíces
      </Typography>
    </Box>
  );
}

export default WhiteSpace;
