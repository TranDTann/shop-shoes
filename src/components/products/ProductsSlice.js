import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../utils/httpRequest";
import { searchCart, searchProduct } from "../filters/FiltersSlice";

const ProductsSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    cart: [],
    favourites: [],
    isLogin: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleIsLogin.fulfilled, (state, action) => {
        state.isLogin = action.meta.arg;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        console.log(action);
        let productSlug = state.cart.map((item) => item.slug);
        let productSize = state.cart.map((item) => item.size);
        console.log(productSize);
        console.log(productSlug);
        if (
          productSlug.includes(action.payload.slug) &&
          productSize.includes(action.payload.size)
        ) {
          let a = state.cart.find(
            (item) =>
              item.slug === action.payload.slug &&
              item.size === action.payload.size
          );
          console.log(a);
          a.quantity += Number(action.payload.quantity);
        } else {
          state.cart.push(action.payload);
        }
      })

      .addCase(editCart.fulfilled, (state, action) => {
        state.cart.map((item) => {
          if (
            item.slug === action.payload.slug &&
            item.size === action.payload.size
          ) {
            item.quantity = action.payload.quantity;
          }
          return item;
        });
      })

      .addCase(fetchProductCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })

      .addCase(deleteProductCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
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
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(searchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export const handleIsLogin = createAsyncThunk(
  "products/handleIsLogin",
  async () => {}
);

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

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  console.log(data);
  try {
    const res = await httpRequest.post("/cart", data);
    return res.data;
  } catch (err) {
    console.log("errAddToCart", err);
  }
});

export const editCart = createAsyncThunk("cart/editCart", async (data) => {
  console.log(data);
  try {
    const res = await httpRequest.put(`/cart/${data.id}`, {
      quantity: data.totalQuantity,
    });
    return res.data;
  } catch (err) {
    console.log("errEditCart", err);
  }
});

export const deleteProductCart = createAsyncThunk(
  "cart/deleteProductCart",
  async (id) => {
    try {
      const res = await httpRequest.delete(`/cart/${id}`);
      return res.data;
    } catch (err) {
      console.log("errDeleteProductCart", err);
    }
  }
);

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
