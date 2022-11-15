export const isLoginSelector = (state) => state.productList.isLogin;

export const currTabSelector = (state) => state.productList.currTab;

export const genderSelector = (state) => state.filters.gender;

export const productListSelector = (state) => state.productList.products;

export const productListFilterSelector = (state) => {
  let arr = [...state.productList.products];

  if (state.filters.filterObject.limitedEdition) {
    arr = arr.filter(
      (product) =>
        product.limitedEdition === state.filters.filterObject.limitedEdition
    );
  }
  if (state.filters.filterObject.onlineOnly) {
    arr = arr.filter(
      (product) => product.onlineOnly === state.filters.filterObject.onlineOnly
    );
  }

  if (state.filters.filterObject.saleOff) {
    arr = arr.filter(
      (product) => product.saleOff === state.filters.filterObject.saleOff
    );
  }

  if (state.filters.filterObject.bestSeller) {
    arr = arr.filter(
      (product) => product.bestSeller === state.filters.filterObject.bestSeller
    );
  }

  if (state.filters.filterObject.newArrival) {
    arr = arr.filter(
      (product) => product.newArrival === state.filters.filterObject.newArrival
    );
  }

  if (state.filters.filterObject.style !== "All") {
    arr = arr.filter(
      (product) => product.style === state.filters.filterObject.style
    );
  }

  if (state.filters.filterObject.type !== "All") {
    arr = arr.filter(
      (product) => product.type === state.filters.filterObject.type
    );
  }

  if (state.filters.filterObject.substance !== "ALL") {
    arr = arr.filter(
      (product) => product.by === state.filters.filterObject.substance
    );
  }

  if (state.filters.filterObject.color !== "") {
    arr = arr.filter(
      (product) => product.typeColor === state.filters.filterObject.color
    );
  }

  arr = arr.filter(
    (product) => product.price <= state.filters.filterObject.price
  );

  return arr;
};

export const cartListSelector = (state) => state.carts.cart;

export const searchTextSelector = (state) => state.filters.searchText;

export const isRemoveFilterSelected = (state) => state.filters.isRemoveFilter;

export const favouritesProductSelector = (state) =>
  state.productList.products.filter((product) => product.isFavourite);

export const filterObjectSelector = (state) => state.filters.filterObject;
