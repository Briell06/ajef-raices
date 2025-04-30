import { Box, Typography } from "@mui/material";
import BG from "../../public/bg.jpg";

function WhiteSpace() {
  return (
    <Box
      height="40vh"
      sx={{
        backgroundImage: `linear-gradient(#001805, transparent),url(${BG})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h1"
        fontSize="10vh"
        align="center"
        color="white"
        fontWeight="bold"
      >
        Proyecto Ajef Raíces
      </Typography>
    </Box>
  );
}

export default WhiteSpace;
