import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../utils/httpRequest";

const ProductsSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    cart: [],
    favourites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("dasdasd", action);
        let productSlug = state.cart.map((item) => item.slug);
        console.log(productSlug);
        if (productSlug.includes(action.payload.slug)) {
          state.cart = state.cart;
        } else {
          state.cart.push(action.payload);
        }
      })

      .addCase(fetchProductCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      .addCase(fetchProductFavourite.fulfilled, (state, action) => {
        state.favourites = action.payload;
      })

      .addCase(favouritesProduct.fulfilled, (state, action) => {
        let arrSlug = state.favourites.map((item) => item.slug);
        if (arrSlug.includes(action.payload.slug)) {
          state.favourites = state.favourites.filter(
            (item) => item.slug !== action.payload.slug
          );
        } else {
          state.favourites.push(action.payload);
        }
      })

      .addCase(deleteProductFavourite.fulfilled, (state, action) => {
        state.favourites = state.favourites.filter(
          (product) => product.id !== action.payload.id
        );
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await httpRequest.get("/products");
      return res.data;
    } catch (err) {
      console.log("errFetchProducts", err);
    }
  }
);

export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  try {
    const res = await httpRequest.post("/cart", product);
    return res.data;
  } catch (err) {
    console.log("errAddToCart", err);
  }
});

export const fetchProductCart = createAsyncThunk(
  "cart/fetchProductCart",
  async () => {
    try {
      const res = await httpRequest.get("/cart");
      return res.data;
    } catch (err) {
      console.log("errAddToCart", err);
    }
  }
);

export const favouritesProduct = createAsyncThunk(
  "products/favouritesProduct",
  async (data) => {
    try {
      const res = await httpRequest.post("/favourites", data);
      return res.data;
    } catch (err) {
      console.log("errFavouritesProduct", err);
    }
  }
);

export const deleteProductFavourite = createAsyncThunk(
  "products/fetchProductFavourite",
  async (id) => {
    try {
      const res = await httpRequest.delete(`/favourites/${id}`);
      return res.data;
    } catch (err) {
      console.log("errDeleteProductFavourite", err);
    }
  }
);

export const fetchProductFavourite = createAsyncThunk(
  "favourites/fetchProductFavourite",
  async () => {
    try {
      const res = await httpRequest.get("/favourites");
      return res.data;
    } catch (err) {
      console.log("errFetchProductFavourite", err);
    }
  }
);

export default ProductsSlice;
