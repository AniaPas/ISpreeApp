import { useEffect, useContext, FC } from "react";
import { getCarts } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
// mui
import { Grid, Button } from "@mui/material";

export const All: FC = () => {
  const global = useContext(GlobalState);
  const fetchBaskets = async () => {
    try {
      const carts = await getCarts();
      return await global.globalGetCarts(carts.data.carts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBaskets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(global.globalCarts);
  const showCards: JSX.Element[] = global.globalCarts.map((item) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <CardComponent id={item.id} products={item.products}>
          <Button></Button>
        </CardComponent>
      </Grid>
    );
  });
  return (
    <>
      {" "}
      <Grid container spacing={3}>
        {showCards}
      </Grid>
    </>
  );
};
