import className from "classnames/bind";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CartItem.module.scss";
import {
  deleteProductCart,
  deleteProductFavourite,
  editCart,
  favouritesProduct,
} from "../../../components/products/ProductsSlice";
import {
  favouritesProductSelector,
  slugFavouritesProductSelector,
} from "../../../redux/selectors";

const cx = className.bind(styles);

function CartItem({ product, formatCash }) {
  const dispatch = useDispatch();
  const slugFavouritesProduct = useSelector(slugFavouritesProductSelector);
  const arrFavouritesProduct = useSelector(favouritesProductSelector);

  const handleChangeQuantity = (e, product) => {
    console.log(e.target.value);
    console.log(product);
    if (e.target.value === "+") {
      let totalQuantity = product.quantity + 1;
      dispatch(editCart({ id: product.id, totalQuantity }));
    } else {
      let totalQuantity = product.quantity - 1;
      dispatch(editCart({ id: product.id, totalQuantity }));
    }
  };

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

  const handleDeleteProductCart = (product) => {
    dispatch(deleteProductCart(product.id));
  };

  return (
    <div className={cx("product-item", "row")}>
      <img className={cx("img-product", "c-4")} src={product.images[0].url} />
      <div className={cx("cart-list")}>
        <div className={cx("info-product", "row")}>
          <div className={cx("title", "row")}>
            <h4 className={cx("name-product")}>{product.name}</h4>
            <h4 className={cx("total-price-item")}>
              {formatCash(String(product.price * product.quantity))} VND
            </h4>
          </div>
          <h4 className={cx("price")}>
            Giá: {formatCash(String(product.price))} VND
          </h4>
        </div>
        <div className={cx("action", "row")}>
          <div className={cx("select", "c-8")}>
            <div className={cx("select-item")}>
              <h6 className={cx("title-select")}>Size</h6>
              <select className={cx("select-size")}>
                <option>{product.size}</option>
              </select>
            </div>
            <div className={cx("select-item")}>
              <h6 className={cx("title-select")}>Số lượng</h6>
              <div className={cx("btn-quantity")}>
                <input
                  className={cx("change-quantity")}
                  type="button"
                  value="-"
                  onClick={(e) => handleChangeQuantity(e, product)}
                />
                <input
                  className={cx("input-quantity")}
                  value={product.quantity}
                />
                <input
                  className={cx("change-quantity")}
                  type="button"
                  value="+"
                  onClick={(e) => handleChangeQuantity(e, product)}
                />
              </div>
            </div>
          </div>
          <div className={cx("action-user", "c-4")}>
            <button
              className={cx("btn-heart")}
              onClick={() => handleClickHeart(product)}
            >
              {slugFavouritesProduct.includes(product.slug) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.5"
                  height="29.2"
                  viewBox="0 0 32.5 29.2"
                  className={cx("svg-heart")}
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
          </div>
          <button
            className={cx("btn-trash")}
            onClick={() => handleDeleteProductCart(product)}
          >
            <FontAwesomeIcon className={cx("icon-trash")} icon={faTrash} />
          </button>
        </div>
      </div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default CartItem;
