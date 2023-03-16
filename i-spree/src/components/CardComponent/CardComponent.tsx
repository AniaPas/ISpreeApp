import { FC } from "react";
import { BasketsInterface } from "../../Store/GlobalStore";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const CardComponent: FC<BasketsInterface> = ({ id, name, products }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
            Product: {name}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            products
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
