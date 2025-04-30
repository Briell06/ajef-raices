import { Avatar, Box, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../public/main-img.jpg";

export default function NavBar() {
  return (
    <AppBar component="nav" position="static" elevation={24}>
      <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
        <Box py={2} mx={1}>
          <Avatar
            src={Logo}
            sx={{
              height: { xs: "5vh", sm: "7vh" },
              width: { xs: "5vh", sm: "7vh" },
            }}
          />
        </Box>
        <Typography
          variant="h5"
          fontSize="2.5vh"
          fontWeight={"medium"}
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Herminio Rivera
        </Typography>
        <Stack direction="row" ml="auto" spacing={{ xs: 0, md: 2 }}>
          <Button
            size="large"
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: { md: "1.1rem" } }}
          >
            INICIO
          </Button>
          <Button
            size="large"
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: { md: "1.1rem" } }}
          >
            NOVEDADES
          </Button>
          <Button
            size="large"
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: { md: "1.1rem" } }}
          >
            INFORMACIÓN
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
