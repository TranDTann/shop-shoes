import { createSlice } from "@reduxjs/toolkit";

const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: "",
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

  reducers: {
    searchText: (state, action) => {
      state.searchText = action.payload;
    },

    listStatus: (state, action) => {
      if (action.payload.includes("Limited Edition")) {
        state.filterObject.limitedEdition = true;
      } else {
        state.filterObject.limitedEdition = false;
      }

      if (action.payload.includes("Online Only")) {
        state.filterObject.onlineOnly = true;
      } else {
        state.filterObject.onlineOnly = false;
      }

      if (action.payload.includes("Sale Off")) {
        state.filterObject.saleOff = true;
      } else {
        state.filterObject.saleOff = false;
      }

      if (action.payload.includes("Best Seller")) {
        state.filterObject.bestSeller = true;
      } else {
        state.filterObject.bestSeller = false;
      }

      if (action.payload.includes("New Arrival")) {
        state.filterObject.newArrival = true;
      } else {
        state.filterObject.newArrival = false;
      }
    },

    typeSelected: (state, action) => {
      state.filterObject.type = action.payload;
    },

    styleSelected: (state, action) => {
      state.filterObject.style = action.payload;
    },

    colorSelected: (state, action) => {
      state.filterObject.color = action.payload;
    },

    substanceSelected: (state, action) => {
      state.filterObject.substance = action.payload;
    },

    priceSelected: (state, action) => {
      state.filterObject.price = action.payload;
    },

    resetFilter: (state, action) => {
      state.filterObject = action.payload;
    },
  },
});

export const {
  listStatus,
  typeSelected,
  styleSelected,
  colorSelected,
  substanceSelected,
  priceSelected,
  resetFilter,
  searchText,
  setGender,
} = FiltersSlice.actions;

export default FiltersSlice;
