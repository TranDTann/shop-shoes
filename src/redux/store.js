import { configureStore } from "@reduxjs/toolkit";
import CartsSlice from "./reducers/CartsSlice";
import FiltersSlice from "./reducers/FiltersSlice";
import ProductsSlice from "./reducers/ProductsSlice";

const store = configureStore({
  reducer: {
    productList: ProductsSlice.reducer,
    filters: FiltersSlice.reducer,
    carts: CartsSlice.reducer,
  },
});
export default store;
