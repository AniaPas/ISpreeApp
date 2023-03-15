import { useEffect, useContext, FC } from "react";
import { getBaskets } from "../../services/services";
import { GlobalState } from "../../Store/GlobalStore";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { Grid } from "@mui/material";

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
  return (
    <>
      {" "}
      <Grid container spacing={3}>
        <CardComponent />
      </Grid>
    </>
  );
};
