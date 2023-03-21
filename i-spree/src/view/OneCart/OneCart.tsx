import { useState, useEffect, useContext, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneCart, deleteCart } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CartInterface } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { Products } from "../../components/Products/Products";
//MUI
import { Button, Grid, Box, Typography } from "@mui/material/";

//const { id } = useParams();
export const OneCart: FC = () => {
  interface CartInterface {
    id?: number;
    products: any[];
  }

  const [cart, setCart] = useState<CartInterface>({} as CartInterface);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOneCart = () => {
      const cart = getOneCart(id);
      cart
        .then((item) => {
          setCart(item.data);
          // return item.data;
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchOneCart();
  }, [id]);

  const removeCart = (id: number) => {
    deleteCart(id.toString())
      .then((res) => {
        console.log(res);
      })

      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        navigate("/");
      });
  };
  console.log(cart);

  const productList = cart.products;
  console.log(productList);
  const createProductList = productList?.map(
    (item) => `${item.title.toLowerCase()}, `
  );
  console.log(createProductList);
  return (
    <>
      <Grid
        container
        spacing={3}
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        flexWrap='wrap'
      >
        <Grid item xs={12} md={6}>
          <CardComponent id={cart.id} products={cart.products} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography color='secondary' fontSize='large'>
            {createProductList}
          </Typography>
        </Grid>
        <Button
          size='small'
          color='primary'
          variant='contained'
          onClick={() => removeCart(cart.id)}
        >
          REMOVE AND GO BACK TO CARTS
        </Button>
        <Grid item xs={12} md={6}>
          <Products products={cart.products} />
        </Grid>
      </Grid>
    </>
  );
};
