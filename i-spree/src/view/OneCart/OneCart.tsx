import { useState, useEffect, useContext, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneCart, deleteCart } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CartInterface } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
//MUI
import { Button, Grid } from "@mui/material/";
import CardActions from "@mui/material/CardActions";

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

  const prod = cart.products;
  console.log(prod);
  const createProductList = prod?.map(
    (item) => `${item.title.toLowerCase()}, `
  );
  console.log(createProductList);
  return (
    <Grid item xs={12} md={6}>
      <CardComponent id={cart.id} products={cart.products} />

      <Button
        size='small'
        color='primary'
        onClick={() => removeCart(cart.id)}
      ></Button>
      <Button size='small' color='primary' onClick={() => removeCart(cart.id)}>
        REMOVE AND GO BACK TO CARTS
      </Button>
      <p>{createProductList}</p>
      <Button size='small' color='primary' onClick={() => removeCart(cart.id)}>
        REMOVE AND GO BACK TO CARTS
      </Button>
      <Button size='small' color='primary' onClick={() => removeCart(cart.id)}>
        REMOVE AND GO BACK TO CARTS
      </Button>
    </Grid>
  );
};
