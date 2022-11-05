import className from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";

import {
  productListFilterSelector,
  productListSelector,
  searchTextSelector,
} from "../../redux/selectors";
import ProductItem from "../ProductItem/ProductItem";
import { setCurrTab, setProduct } from "../../redux/reducers/ProductsSlice";
import styles from "./ProductList.module.scss";
import Sort from "../sort/Sort";
import Skeleton from "react-loading-skeleton";

const cx = className.bind(styles);

function ProductList({ gender }) {
  const [type, setType] = useState();
  const dispatch = useDispatch();

  let productListFilter = useSelector(productListFilterSelector);
  let productList = useSelector(productListSelector);

  const searchText = useSelector(searchTextSelector);

  productListFilter = productListFilter.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    switch (type?.type) {
      case "nameIncrease": {
        dispatch(
          setProduct(
            [...productListFilter].sort((a, b) => (a.name <= b.name ? -1 : 1))
          )
        );
        break;
      }
      case "nameDecrease": {
        dispatch(
          setProduct(
            [...productListFilter].sort((a, b) => (a.name > b.name ? -1 : 1))
          )
        );
        break;
      }
      case "priceIncrease": {
        dispatch(
          setProduct(
            [...productListFilter].sort((a, b) => (a.price <= b.price ? -1 : 1))
          )
        );
        break;
      }
      case "priceDecrease": {
        dispatch(
          setProduct(
            [...productListFilter].sort((a, b) => (a.price > b.price ? -1 : 1))
          )
        );
        break;
      }
      case "topSeller": {
        dispatch(
          setProduct(
            [...productListFilter].sort((a, b) => (a.sold > b.sold ? -1 : 1))
          )
        );
        break;
      }
      default:
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type?.type]);

  useEffect(() => {
    dispatch(setCurrTab("all"));
  }, []);

  if (gender === "men") {
    productListFilter = productListFilter.filter(
      (product) => product.gender === "men" || product.gender === "unisex"
    );
  }
  if (gender === "women") {
    productListFilter = productListFilter.filter(
      (product) => product.gender === "women" || product.gender === "unisex"
    );
  }

  let loading = true;
  if (productList.length) {
    loading = false;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p className={cx("quantity-product")}>
          Tổng: {productListFilter.length} sản phẩm
        </p>
        <Sort type={type} setType={setType} />
      </div>
      {loading ? (
        <Skeleton count={50} />
      ) : (
        <div className={cx("productList", "row")}>
          {productListFilter.length ? (
            productListFilter.map((product, index) => (
              <div className={cx("c-4")}>
                <ProductItem key={index} product={product} />
              </div>
            ))
          ) : (
            <p className={cx("text-sorry")}>Sorry, can't find your result</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductList;
