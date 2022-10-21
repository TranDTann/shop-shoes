import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  deleteProductFavourite,
  favouritesProduct,
} from "../products/ProductsSlice";

import styles from "./ProductItem.module.scss";

const cx = className.bind(styles);

function ProductItem({ product, slugFavouritesProduct, arrFavouritesProduct }) {
  const dispatch = useDispatch();

  const handleClickHeart = (data) => {
    let productDeleted = arrFavouritesProduct.find(
      (item) => item.slug === data.slug
    );
    if (!slugFavouritesProduct.includes(data.slug)) {
      dispatch(favouritesProduct(data));
    } else {
      dispatch(deleteProductFavourite(productDeleted.id));
    }
  };

  let floor = Math.floor(product.price / 1000);
  let mod = product.price % 1000;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={`/products/${product.slug}`}>
          <img className={cx("main-img", "img")} src={product.images[0].url} />
          <img
            className={cx("second-img", "img")}
            src={product.images[1].url}
          />
        </Link>
        <button
          className={cx("heart")}
          onClick={() => handleClickHeart(product)}
        >
          {slugFavouritesProduct.includes(product.slug) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.5"
              height="29.2"
              viewBox="0 0 32.5 29.2"
              style={{
                fill: "#f15e2c",
              }}
            >
              <path
                class="cls-1"
                d="M16.25,8.8749A7.5051,7.5051,0,0,0,7.49,1.4777,7.7789,7.7789,0,0,0,1.25,9.2762v.2422a7.5,7.5,0,0,0,2.1967,5.3033L16.25,27.6249,29.0532,14.8217A7.5,7.5,0,0,0,31.25,9.5184V9.2762a7.7789,7.7789,0,0,0-6.24-7.7985,7.505,7.505,0,0,0-8.76,7.3972"
              />
            </svg>
          ) : (
            <FontAwesomeIcon
              className={cx("icon-heart")}
              icon={faHeart}
              style={{
                color: "#f15e2c",
              }}
            />
          )}
        </button>
        {product.limitedEdition && (
          <p className={cx("limited")}>Limited Edition</p>
        )}
        <button className={cx("view-detail")}>XEM CHI TIẾT</button>
      </div>
      {product.newArrival && <p className={cx("new-arrival")}>New Arrival</p>}
      <Link className={cx("name")} to={`/products/${product.slug}`}>
        {product.name}
      </Link>
      <p className={cx("color")}>{product.color}</p>
      <h4>{`${floor},${mod}00`} VND</h4>
    </div>
  );
}

export default ProductItem;
