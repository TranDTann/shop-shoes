import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../components/filters/FiltersSlice";
import ProductsSlice from "../components/products/ProductsSlice";

const store = configureStore({
  reducer: {
    productList: ProductsSlice.reducer,
    filters: FiltersSlice.reducer,
  },
});
export default store;
