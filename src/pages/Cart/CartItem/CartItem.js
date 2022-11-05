import className from "classnames/bind";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { updateProducts } from "../../../redux/reducers/ProductsSlice";
import Heart from "../../../components/heart/Heart";
import styles from "./CartItem.module.scss";
import { deleteCart, editCart } from "../../../redux/reducers/CartsSlice";
import { productListFilterSelector } from "../../../redux/selectors";

const cx = className.bind(styles);

function CartItem({ product, formatCash }) {
  const dispatch = useDispatch();
  const productList = useSelector(productListFilterSelector);

  const handleChangeQuantity = (e, product) => {
    if (e.target.value === "+") {
      let totalQuantity = product.quantity + 1;
      dispatch(editCart({ id: product.id, totalQuantity }));
    } else {
      let totalQuantity = product.quantity - 1;
      dispatch(editCart({ id: product.id, totalQuantity }));
    }
  };

  const handleDeleteCart = (product) => {
    dispatch(deleteCart(product.id));
  };

  let productCartItem = productList.find((item) => item.slug === product.slug);
  const handleClickHeart = () => {
    dispatch(
      updateProducts({
        id: productCartItem.id,
        isFavourite: !productCartItem.isFavourite,
      })
    );
  };

  return (
    <div className={cx("product-item", "row")}>
      <Link
        title={productCartItem.name}
        className={cx("c-4")}
        to={`/products/${productCartItem.slug}`}
      >
        <img
          className={cx("img-product")}
          src={productCartItem.images[0].url}
          alt=""
        />
      </Link>
      <div className={cx("cart-list")}>
        <div className={cx("info-product")}>
          <div className={cx("title", "row")}>
            <Link
              title={productCartItem.name}
              to={`/products/${productCartItem.slug}`}
            >
              <h4 className={cx("name-product")}>{productCartItem.name}</h4>
            </Link>
            <h4 className={cx("total-price-item")}>
              {formatCash(String(productCartItem.price * product.quantity))} VND
            </h4>
          </div>
          <h4 className={cx("price")}>
            Giá: {formatCash(String(productCartItem.price))} VND
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
            <button className={cx("btn-heart")} onClick={handleClickHeart}>
              <Heart product={productCartItem} />
            </button>
          </div>
          <button
            className={cx("btn-trash")}
            onClick={() => handleDeleteCart(product)}
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
