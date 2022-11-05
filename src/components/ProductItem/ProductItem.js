import className from "classnames/bind";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { updateProducts } from "../../redux/reducers/ProductsSlice";
import Heart from "../heart/Heart";
import styles from "./ProductItem.module.scss";

const cx = className.bind(styles);

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleClickHeart = () => {
    dispatch(
      updateProducts({ id: product.id, isFavourite: !product.isFavourite })
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={`/products/${product.slug}`}>
          <img
            className={cx("main-img", "img")}
            src={product.images[0].url}
            alt=""
          />
          <img
            className={cx("second-img", "img")}
            src={product.images[1].url}
            alt=""
          />
        </Link>
        <button className={cx("heart")} onClick={handleClickHeart}>
          <Heart product={product} />
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
      <h4 className={cx("price")}>{formatCash(String(product.price))} VND</h4>
    </div>
  );
}

export default ProductItem;
