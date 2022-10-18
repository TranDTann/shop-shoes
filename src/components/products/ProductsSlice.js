import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../utils/httpRequest";
import { changeTabProduct, productFilter } from "../filters/FiltersSlice";

const ProductsSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    cart: [],
    tabProduct: "all",
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
      .addCase(changeTabProduct.fulfilled, (state, action) => {
        state.tabProduct = action.meta.arg;
        let newProducts = [...state.products];
        if (state.tabProduct === "men") {
          newProducts = newProducts.filter(
            (product) => product.gender === "men" || product.gender === "unisex"
          );
        } else if (state.tabProduct === "women") {
          newProducts = newProducts.filter(
            (product) =>
              product.gender === "women" || product.gender === "unisex"
          );
        }
        state.products = newProducts;
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

export default ProductsSlice;
