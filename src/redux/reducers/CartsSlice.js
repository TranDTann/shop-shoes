import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../utils/httpRequest";

const CartsSlice = createSlice({
  name: "carts",
  initialState: {
    cart: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        let product = state.cart.find(
          (item) =>
            item.slug === action.payload.slug &&
            item.size === action.payload.size
        );
        if (product === undefined) {
          state.cart.push(action.payload);
        } else product.quantity += Number(action.payload.quantity);
      })

      .addCase(editCart.fulfilled, (state, action) => {
        let product = state.cart.find(
          (item) =>
            item.slug === action.payload.slug &&
            item.size === action.payload.size
        );

        product.quantity = action.payload.quantity;
      })

      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      });
  },
});

export const { setFavouriteCart } = CartsSlice.actions;

export const fetchCart = createAsyncThunk("carts/fetchCart", async () => {
  try {
    const res = await httpRequest.get("/cart");
    return res.data;
  } catch (err) {
    console.log("errFetchCart", err);
  }
});

export const addToCart = createAsyncThunk("carts/addToCart", async (data) => {
  try {
    const res = await httpRequest.post("/cart", data);
    return res.data;
  } catch (err) {
    console.log("errAddToCart", err);
  }
});

export const editCart = createAsyncThunk("carts/editCart", async (data) => {
  try {
    const res = await httpRequest.put(`/cart/${data.id}`, {
      quantity: data.totalQuantity,
    });
    return res.data;
  } catch (err) {
    console.log("errEditCart", err);
  }
});

export const deleteCart = createAsyncThunk("carts/deleteCart", async (id) => {
  try {
    const res = await httpRequest.delete(`/cart/${id}`);
    return res.data;
  } catch (err) {
    console.log("errDeleteCart", err);
  }
});

export default CartsSlice;
