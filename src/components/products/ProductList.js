import className from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  favouritesProductSelector,
  filterObjectSelector,
  productListSelector,
  slugFavouritesProductSelector,
} from "../../redux/selectors";
import ProductItem from "../ProductItem/ProductItem";
import { fetchProductFavourite, fetchProducts } from "./ProductsSlice";
import styles from "./ProductList.module.scss";
import Sort from "../sort/Sort";

const cx = className.bind(styles);

function ProductList({ gender }) {
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  let productList = useSelector(productListSelector);
  const dispatch = useDispatch();
  const filterObject = useSelector(filterObjectSelector);

  const handleSort = (type, value) => {
    setType(type);
    setValue(value);
  };

  const arrFavouritesProduct = useSelector(favouritesProductSelector);
  const slugFavouritesProduct = useSelector(slugFavouritesProductSelector);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductFavourite());
  }, []);

  if (gender === "men") {
    productList = productList.filter(
      (product) => product.gender === "men" || product.gender === "unisex"
    );
  }

  if (gender === "women") {
    productList = productList.filter(
      (product) => product.gender === "women" || product.gender === "unisex"
    );
  }

  if (type === "name") {
    productList = productList.slice().sort((a, b) => {
      if (a.name > b.name) return value;
      else if (a.name < b.name) return -value;
      else return 0;
    });
  } else if (type === "price") {
    productList = productList.slice().sort((a, b) => {
      if (a.price > b.price) return value;
      else if (a.price < b.price) return -value;
      else return 0;
    });
  } else {
    productList = productList.slice().sort((a, b) => b.sold - a.sold);
  }

  if (filterObject.limitedEdition) {
    productList = productList.filter(
      (product) => product.limitedEdition === filterObject.limitedEdition
    );
  }

  if (filterObject.onlineOnly) {
    productList = productList.filter(
      (product) => product.onlineOnly === filterObject.onlineOnly
    );
  }

  if (filterObject.saleOff) {
    productList = productList.filter(
      (product) => product.saleOff === filterObject.saleOff
    );
  }

  if (filterObject.bestSeller) {
    productList = productList.filter(
      (product) => product.bestSeller === filterObject.bestSeller
    );
  }

  if (filterObject.newArrival) {
    productList = productList.filter(
      (product) => product.newArrival === filterObject.newArrival
    );
  }

  if (filterObject.style !== "All") {
    productList = productList.filter(
      (product) => product.style === filterObject.style
    );
  }

  if (filterObject.type !== "All") {
    productList = productList.filter(
      (product) => product.type === filterObject.type
    );
  }

  if (filterObject.substance !== "ALL") {
    productList = productList.filter(
      (product) => product.by === filterObject.substance
    );
  }

  if (filterObject.color !== "") {
    productList = productList.filter(
      (product) => product.typeColor === filterObject.color
    );
  }

  productList = productList.filter(
    (product) => product.price <= filterObject.price
  );

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Sort productList={productList} handleSort={handleSort} />
      </div>
      <div className={cx("productList", "row")}>
        {productList.map((product, index) => (
          <div className={cx("c-4")}>
            <ProductItem
              key={index}
              product={product}
              arrFavouritesProduct={arrFavouritesProduct}
              slugFavouritesProduct={slugFavouritesProduct}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
