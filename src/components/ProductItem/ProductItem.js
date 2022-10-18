import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.scss";

const cx = className.bind(styles);

function ProductItem({ product }) {
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
        <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
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
      <h4>{product.price} VND</h4>
    </div>
  );
}

export default ProductItem;
