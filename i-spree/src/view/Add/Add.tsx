import { FormEvent, useRef, useContext, useEffect, useState } from "react";
import { PayloadInterface } from "../../Store/GlobalStore";
import { GlobalState } from "../../Store/GlobalStore";
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
  TextField,
  Typography,
} from "@mui/material";
import { Payload } from "recharts/types/component/DefaultLegendContent";

export const Add = () => {
  const [isCartInvalid, setCartInvalid] = useState(true);
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
  const isObjComplete = (obj: PayloadInterface): boolean => {
    const objKeys = Object.keys(obj);
    const isComplete = objKeys.every((item: string) => {
      return obj.userId !== null && obj.products !== null;
    });
    return isComplete;
  };

  const submitCart = (event: FormEvent) => {
    event.preventDefault();

    if (form.current && form.current !== null) {
      const formFields = Array.from(form.current).filter((item) => {
        if (
          item.id.search("userId") > -1 ||
          // item.id.search("products") > -1 ||
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
      // const getCartId = console.log(
      //   globalState.globalCarts.map((item) => item.id)
      // );
      // const isCartIDUnique = () => {
      //   if(payload.userId['formFields[0] as HTMLInputElement'].value===getCartId)
      // };
      const isValid = isObjComplete(payload);
      // globalState.globalCarts
      //   .map((item) => item.id)
      //   .indexOf(+payload.userId) === -1;
      setCartInvalid(isValid);
      if (isValid) {
        addCart(payload)
          .then((res) => {
            console.log(res);
          })

          .catch((e) => {
            console.error(e);
            {
              <p>You have not filled the fields correctly!</p>;
            }
          });
      }
    }
  };

  const idForUser = createId("user");
  // const idForProducts = createId("products");
  const idforProduct = createId("id");
  const idforQuantity = createId("quantity");
  console.log(isCartInvalid);
  return (
    // <div>Ania</div>

    <Box component='form' ref={form}>
      <FormControl>
        <InputLabel htmlFor={idForUser}>Provide your ID number</InputLabel>
        <Input id={idForUser} />
        <FormHelperText id='my-helper-text'>Enter your ID</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={idforProduct}>Product ID</InputLabel>
        <Input id={idforProduct} />
        <FormHelperText id='my-helper-text'>
          Provide the ptoduct ID
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor={idforQuantity}>
          Provide product quantity
        </InputLabel>
        <Input id={idForUser} />
        <FormHelperText id='my-helper-text'>How many products?</FormHelperText>
      </FormControl>

      {isCartInvalid && <p>You have not filled the fields correctly!</p>}
      <div>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          sx={{
            backgroundColor: "#ffc107",
            boxShadow: "0 0 0",
            fontWeight: 600,
            transition: "all 0.45s",
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "0 0 0",
            },
          }}
          onClick={(event) => submitCart(event)}
        >
          Save
        </Button>
      </div>
    </Box>
  );
};
