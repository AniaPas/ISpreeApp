import { useState, useEffect, useContext, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneCart, deleteCart } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CartInterface } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
//MUI
import { Button } from "@mui/material/";
import CardActions from "@mui/material/CardActions";

//const { id } = useParams();
export const OneCart: FC = () => {
  interface CartInterface {
    id: number;
    products: [];
  }

  const [cart, setCart] = useState<CartInterface>({} as CartInterface);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOneCart = () => {
      if (id) {
        const cart = getOneCart(id);
        cart
          .then((item) => {
            setCart(item.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    fetchOneCart();
  }, [id]);
  //console.log(item.data)
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
  return (
    <>
      <CardComponent id={cart.id} products={cart.products} />

      <Button size='small' color='primary' onClick={() => removeCart(cart.id)}>
        REMOVE AND GO BACK TO CARTS
      </Button>
    </>
  );
};
