import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const Nav = () => {
  return (
    <AppBar position='sticky' sx={{ marginBottom: 5 }}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          I Spree
        </Typography>
        <Button color='inherit'>Add</Button>
      </Toolbar>
    </AppBar>
  );
};
