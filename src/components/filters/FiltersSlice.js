import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "",
    designs: "",
    productLine: "",
    price: 0,
    color: "",
    substance: "All",
    filterObject: {
      saleOff: false,
      onlineOnly: false,
      limitedEdition: false,
      newArrival: false,
      bestSeller: false,
      style: "All",
      type: "All",
      price: 990000,
      color: "",
      substance: "ALL",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listStatus.fulfilled, (state, action) => {
        if (action.meta.arg.includes("Limited Edition")) {
          state.filterObject.limitedEdition = true;
        } else {
          state.filterObject.limitedEdition = false;
        }

        if (action.meta.arg.includes("Online Only")) {
          state.filterObject.onlineOnly = true;
        } else {
          state.filterObject.onlineOnly = false;
        }

        if (action.meta.arg.includes("Sale Off")) {
          state.filterObject.saleOff = true;
        } else {
          state.filterObject.saleOff = false;
        }

        if (action.meta.arg.includes("Best Seller")) {
          state.filterObject.bestSeller = true;
        } else {
          state.filterObject.bestSeller = false;
        }

        if (action.meta.arg.includes("New Arrival")) {
          state.filterObject.newArrival = true;
        } else {
          state.filterObject.newArrival = false;
        }
      })
      .addCase(styleCheck.fulfilled, (state, action) => {
        state.filterObject.style = action.meta.arg;
      })
      .addCase(typeCheck.fulfilled, (state, action) => {
        state.filterObject.type = action.meta.arg;
      })
      .addCase(colorCheck.fulfilled, (state, action) => {
        state.filterObject.color = action.meta.arg;
      })
      .addCase(substanceSelect.fulfilled, (state, action) => {
        state.filterObject.substance = action.meta.arg;
      })
      .addCase(priceOption.fulfilled, (state, action) => {
        state.filterObject.price = action.meta.arg;
      })
      .addCase(resetFilterObject.fulfilled, (state, action) => {
        state.filterObject = action.meta.arg;
      });
  },
});

export const changeTabProduct = createAsyncThunk(
  "filters/changeTabProduct",
  async () => {}
);

export const listStatus = createAsyncThunk(
  "filters/listStatus",
  async (list) => {}
);

export const styleCheck = createAsyncThunk(
  "filters/checkStyle",
  async (style) => {}
);

export const typeCheck = createAsyncThunk(
  "filters/checkType",
  async (type) => {}
);

export const colorCheck = createAsyncThunk(
  "filters/colorCheck",
  async (color) => {}
);

export const substanceSelect = createAsyncThunk(
  "filters/substanceSelect",
  async (option) => {}
);

export const priceOption = createAsyncThunk(
  "filters/priceOption",
  async (price) => {}
);

export const resetFilterObject = createAsyncThunk(
  "filters/resetFilterObject",
  async (initFilterObject) => {}
);

export default FiltersSlice;
