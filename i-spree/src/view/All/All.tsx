import { useEffect, useContext, FC } from "react";
import { useNavigate } from "react-router-dom";
import { getCarts } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
// mui
import { Grid, Button, CardActionArea } from "@mui/material";

export const All: FC = () => {
  const global = useContext(GlobalState);
  const navigate = useNavigate();
  const fetchBaskets = async () => {
    try {
      const carts = await getCarts();
      return global.globalGetCarts(carts.data.carts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBaskets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(global.globalCarts);
  const showMore = (id: number): void => {
    navigate(`/${id}`);
  };
  const showCards: JSX.Element[] = global.globalCarts.map((item) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={item.id}>
        <div onClick={() => showMore(item.id!)}>
          <CardActionArea>
            <CardComponent
              id={item.id}
              products={item.products}
            ></CardComponent>
          </CardActionArea>
        </div>
      </Grid>
    );
  });
  return (
    <>
      {" "}
      <Grid container spacing={3} sx={{ marginBottom: 10 }}>
        {showCards}
      </Grid>
    </>
  );
};
