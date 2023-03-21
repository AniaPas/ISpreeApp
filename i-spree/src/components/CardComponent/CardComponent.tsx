import { useContext, FC } from "react";
import { CartInterface } from "../../Store/GlobalStore";
// MUI
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import { GlobalState } from "../../Store/GlobalStore";

export const CardComponent: FC<CartInterface> = ({ id, products }) => {
  // const global = useContext(GlobalState);
  // const oneCart = global.globalOneCart;

  // const createProductList = products.map(
  //   (item) => `${item.title.toLowerCase()}, `
  //);
  return (
    <Card
      sx={{
        maxWidth: 350,
        backgroundColor: "#3d3d3de7",
        transition: "all 0.45s",
        "&:hover": {
          backgroundColor: "#5c5c5c",
        },
      }}
    >
      <CardMedia>
        <ShoppingCartIcon
          color='secondary'
          sx={{
            fontSize: "8rem",
            padding: 2,
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{
            color: "#fff",
            fontSize: "2rem",
          }}
        >
          CART {id}
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          {/* {createProductList} */}
        </Typography>
      </CardContent>
    </Card>
  );
};
