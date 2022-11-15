import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteCart } from "../../redux/reducers/CartsSlice";
import { updateProductFavourite } from "../../redux/reducers/ProductsSlice";
import { productListFilterSelector } from "../../redux/selectors";
import styles from "./DropdownList.module.scss";

const cx = className.bind(styles);

function DropdownList({ products, type }) {
  const dispatch = useDispatch();
  const productList = useSelector(productListFilterSelector);

  let totalPrice = 0;
  if (type === "cart" && products.length > 0) {
    totalPrice = products.reduce((total, product) => {
      let productCartItem = productList.find(
        (item) => item.slug === product.slug
      );
      return total + productCartItem?.price * product.quantity;
    }, 0);
  }

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleDeleteCart = (product) => {
    dispatch(deleteCart(product.id));
  };

  const handleClickHeart = (product) => {
    dispatch(
      updateProductFavourite({
        id: product.id,
        isFavourite: !product.isFavourite,
      })
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("products")}>
        {type === "heart" ? (
          <p className={cx("title-header")}>Sản phẩm yêu thích</p>
        ) : (
          <p className={cx("title-header")}>Giỏ hàng</p>
        )}
        {products.length > 0 ? (
          products.map((product, index) => {
            let productCartItem = productList.find(
              (item) => item.slug === product.slug
            );
            return (
              <div className={cx("product-item")}>
                <Link
                  to={`/products/${productCartItem?.slug}`}
                  title={productCartItem?.name}
                  key={index}
                >
                  <div className={cx("row")}>
                    <div className={cx("img", "c-3-6")}>
                      <img
                        className={cx("img-product")}
                        src={productCartItem?.images[0].url}
                        alt=""
                      />
                    </div>
                    <div className={cx("info", "c-8-4")}>
                      <p
                        className={cx("name-product")}
                        style={{ textTransform: "capitalize" }}
                      >
                        {productCartItem?.name.toLowerCase()}
                      </p>
                      {type === "cart" && (
                        <div className={cx("info-buy")}>
                          <p className={cx("info-size")}>
                            Size: {product.size}
                          </p>
                          <p className={cx("info-quantity")}>
                            Số lượng: {product.quantity}
                          </p>
                        </div>
                      )}
                      <div className={cx("price")}>
                        <p className={cx("price-product")}>
                          {formatCash(String(productCartItem?.price))} VND
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                {type === "heart" ? (
                  <button className={cx("btn-delete", "btn-heart")}>
                    <FontAwesomeIcon
                      className={cx("icon-heart")}
                      icon={faCircleXmark}
                      onClick={() => handleClickHeart(product)}
                    />
                  </button>
                ) : (
                  <button
                    className={cx("btn-delete", "btn-trash")}
                    onClick={() => handleDeleteCart(product)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div className={cx("noti-empty")}>Chưa có sản phẩm nào tại đây</div>
        )}

        {type === "cart" ? (
          <div className={cx("footer-cart")}>
            <h6 className={cx("price-total")}>
              Total: {formatCash(String(totalPrice))} VND
            </h6>
            <Link to="/cart">
              <button className={cx("btn-go-to-cart")}>GO TO CART</button>
            </Link>
          </div>
        ) : (
          <div className={cx("footer-favourite")}></div>
        )}
      </div>
    </div>
  );
}

export default DropdownList;
