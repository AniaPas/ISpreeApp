import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { navElements } from "../../HelperInterface/Navigation";
import { Link } from "react-router-dom";
import { FC } from "react";
import style from "./Nav.module.scss";

interface PropsNav {
  navElements?: navElements[];
}
export const Nav: FC<PropsNav> = () => {
  return (
    <AppBar position='sticky' sx={{ marginBottom: 5 }} color='primary'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
          color='success'
        >
          <Link className={style.link} to='/'>
            I SPREE Shopping App
          </Link>
        </Typography>
        <Button color='inherit'>
          <Link className={style.link} to='add'>
            ADD CARTS
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
