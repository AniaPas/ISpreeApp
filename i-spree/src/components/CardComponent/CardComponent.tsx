import { useContext, FC } from "react";
import { CartInterface } from "../../Store/GlobalStore";
// MUI
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
    <Card sx={{ maxWidth: 1100 }}>
      <CardMedia
        component='img'
        sx={{
          width: 200,

          filter: "grayscale(1)",
          backgroundColor: "rgba(61, 61, 61, 1)",
          transition: "all 0.45s",
          "&:hover": {
            filter: "grayscale(0)",
          },
        }}
        alt={`Book cover `}
        image={`https://via.placeholder.com/150`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          cart {id}
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          {/* {createProductList} */}
        </Typography>
      </CardContent>
    </Card>
  );
};
