import { faCircleXmark, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductCart } from "../products/ProductsSlice";

import styles from "./DropdownList.module.scss";

const cx = className.bind(styles);

function DrowdownList({ productList, handleClickHeart, type }) {
  const dispatch = useDispatch();

  let totalPrice = 0;
  if (type === "cart" && productList.length > 0) {
    totalPrice = productList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleDeleteProductCart = (product) => {
    dispatch(deleteProductCart(product.id));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("products")}>
        {type === "heart" ? (
          <p className={cx("title-header")}>Sản phẩm yêu thích</p>
        ) : (
          <p className={cx("title-header")}>Giỏ hàng</p>
        )}
        {productList.length > 0 ? (
          productList.map((product, index) => (
            <Link
              to={`/products/${product.slug}`}
              title={product.name}
              key={index}
            >
              <div className={cx("product-item", "row")}>
                <div className={cx("img", "c-3-6")}>
                  <img
                    className={cx("img-product")}
                    src={product.images[0].url}
                    alt=""
                  />
                </div>
                <div className={cx("info", "c-8-4")}>
                  <p
                    className={cx("name-product")}
                    style={{ textTransform: "capitalize" }}
                  >
                    {product.name}
                  </p>
                  <div className={cx("price")}>
                    <p className={cx("price-product")}>
                      {formatCash(String(product.price))} VND
                    </p>
                    {type === "heart" ? (
                      <button
                        className={cx("heart")}
                        onClick={() => handleClickHeart(product)}
                      >
                        <FontAwesomeIcon
                          className={cx("icon-heart")}
                          icon={faCircleXmark}
                        />
                      </button>
                    ) : (
                      <div>
                        <div className={cx("info-buy")}>
                          <p className={cx("info-size")}>
                            Size: {product.size}
                          </p>
                          <p className={cx("info-quantity")}>
                            Số lượng: {product.quantity}
                          </p>
                        </div>
                        <button
                          className={cx("btn-trash")}
                          onClick={() => handleDeleteProductCart(product)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className={cx("noti-empty")}>Chưa có sản phẩm nào tại đây</div>
        )}
        <div></div>
        {type === "cart" && (
          <div className={cx("footer")}>
            <h6 className={cx("price-total")}>
              Total: {formatCash(String(totalPrice))} VND
            </h6>
            <Link to="/cart">
              <button className={cx("btn-go-to-cart")}>GO TO CART</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DrowdownList;
