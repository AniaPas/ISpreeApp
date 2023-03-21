//Hooks, FormEvent
import { FormEvent, useRef, useContext, useEffect, useState } from "react";

//Iterface, GlobalState
import { PayloadInterface, GlobalState } from "../../Store/GlobalStore";

//Services
import { addCart, getCarts } from "../../services/services";

//uniqid
import uniqid from "uniqid";

//MUI
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

export const Add = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef<HTMLCollection>();
  const globalState = useContext(GlobalState);
  const getAllCarts = async () => {
    const carts = await getCarts();
    await globalState.globalGetCarts(carts.data.carts);
  };
  useEffect(() => {
    getAllCarts();
    //eslint-disable-next-line
  }, []);

  const createId = (uniqName: string) => {
    return `${uniqid()} ${uniqName}`;
  };

  const submitCart = (event: FormEvent) => {
    event.preventDefault();

    if (form.current && form.current !== null) {
      const formFields = Array.from(form.current).filter((item) => {
        if (
          item.id.search("userId") > -1 ||
          item.id.search("id") > -1 ||
          item.id.search("quantity") > -1
        ) {
          return item;
        } else {
          return [];
        }
      });
      const payload: PayloadInterface = {
        userId: (formFields[0] as HTMLInputElement).value,

        products: [
          {
            id: (formFields[1] as HTMLInputElement).value,
            quantity: (formFields[2] as HTMLInputElement).value,
          },
        ],
      };

      addCart(payload)
        .then((res) => {
          console.log(res);
          setSuccess(res);
          setError(null);
        })
        .catch((e) => {
          console.error(e);
          setError(e);
          setSuccess(null);
        });
    }
  };

  const idForUser = createId("user");
  const idforProduct = createId("id");
  const idforQuantity = createId("quantity");
  const sx = { color: "#8bc34a", paddingBottom: 5, paddingTop: 5 };
  return (
    <Box component='form' ref={form} display='flex' flexDirection='column'>
      <FormControl>
        <InputLabel sx={sx} htmlFor={idForUser}>
          Provide your ID number*
        </InputLabel>
        <Input sx={sx} id={idForUser} />
        <FormHelperText id='my-helper-text' sx={sx}>
          Enter your ID*
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel sx={sx} htmlFor={idforProduct}>
          Product ID
        </InputLabel>
        <Input sx={sx} id={idforProduct} />
        <FormHelperText sx={sx} id='my-helper-text'>
          Provide the ptoduct ID
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={idforQuantity} sx={sx}>
          Provide product quantity
        </InputLabel>
        <Input id={idForUser} sx={sx} />
        <FormHelperText id='my-helper-text' sx={sx}>
          How many products?
        </FormHelperText>
      </FormControl>
      {error && (
        <Typography color='secondary' sx={{ paddingBottom: 5, paddingTop: 5 }}>
          Oh-oh! You have not filled the fields correctly! Are you sure you
          provided your ID numbers rather than letters?? Error details:
          {error.message}
        </Typography>
      )}
      {success && <p>Yay We've made it!</p>}
      <div>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          onClick={(event) => submitCart(event)}
        >
          Save
        </Button>
      </div>
    </Box>
  );
};
