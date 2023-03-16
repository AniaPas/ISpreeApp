import { useEffect, useContext, FC } from "react";
import { getBaskets } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
// mui
import { Grid, Button } from "@mui/material";

export const All: FC = () => {
  const global = useContext(GlobalState);
  const fetchBaskets = async () => {
    try {
      const baskets = await getBaskets();
      return await global.globalGetBaskets(baskets.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBaskets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(global.globalBaskets);
  const howManyCards = global.globalBaskets.length <= 2 ? 6 : 4;
  const showBasketCards: JSX.Element[] = global.globalBaskets.map((item) => {
    return (
      <Grid item xs={12} md={howManyCards} key={item.id}>
        <CardComponent id={item.id} name={item.name} products={item.products}>
          <Button
            size='small'
            color='primary'
            sx={{
              fontWeight: 600,
              transition: "all 0.45s",
              "&:hover": {
                backgroundColor: "#ffc107",
              },
            }}
          >
            Show details
          </Button>
        </CardComponent>
      </Grid>
    );
  });
  return (
    <>
      {" "}
      <Grid container spacing={3}>
        {showBasketCards}
      </Grid>
    </>
  );
};
