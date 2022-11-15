import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../utils/httpRequest";

const ProductsSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    isLogin: false,
    currTab: "",
  },

  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },

    setCurrTab: (state, action) => {
      state.currTab = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(updateProductFavourite.fulfilled, (state, action) => {
        state.products.map((product) => {
          if (product.slug === action.payload.slug) {
            product.isFavourite = !product.isFavourite;
          }
          return product;
        });
      });
  },
});

export const { setFavourite, setLogin, setCurrTab } = ProductsSlice.actions;

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

export const updateProductFavourite = createAsyncThunk(
  "products/updateProductFavourite",
  async (dataEdit) => {
    try {
      const res = await httpRequest.put(`/products/${dataEdit.id}`, {
        isFavourite: dataEdit.isFavourite,
      });
      return res.data;
    } catch (err) {
      console.log("errUpdateProductFavourite", err);
    }
  }
);

export default ProductsSlice;
