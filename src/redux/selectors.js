export const productListSelector = (state) => state.productList.products;

export const cartListSelector = (state) => state.productList.cart;

export const favouritesProductSelector = (state) =>
  state.productList.favourites;

export const slugFavouritesProductSelector = (state) =>
  state.productList.favourites.map((product) => product.slug);

export const filterObjectSelector = (state) => state.filters.filterObject;
