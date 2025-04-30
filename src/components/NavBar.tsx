import { Avatar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../public/main-img.jpg";

export default function NavBar() {
  return (
    <AppBar component="nav" position="static" elevation={24}>
      <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Avatar
            src={Logo}
            sx={{
              height: { xs: "5vh", sm: "7vh" },
              width: { xs: "5vh", sm: "7vh" },
            }}
          />
        </IconButton>
        <Typography
          variant="h5"
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
