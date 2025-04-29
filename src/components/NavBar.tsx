import { Avatar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../public/main-img.jpg";

export default function NavBar() {
  return (
    <Box component="nav" height={{ xs: "5vh", sm: "7vh" }} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={24}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <Avatar
              src={Logo}
              sx={{
                height: { xs: "5vh", sm: "7vh" },
                width: "auto",
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
    </Box>
  );
}
