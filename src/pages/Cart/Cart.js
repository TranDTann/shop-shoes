import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductCart } from "../../components/products/ProductsSlice";
import { cartListSelector } from "../../redux/selectors";

import styles from "./Cart.module.scss";

const cx = className.bind(styles);

function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCart());
  }, []);

  const cartList = useSelector(cartListSelector);
  console.log(cartList);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner", "row")}>
        <div className={cx("cart", "c-8")}>
          <h3>GIỎ HÀNG</h3>
          {cartList.map((product) => {
            <div className={cx("row")}>
              <img
                className={cx("img-product", "c-4")}
                src={product.images[0].url}
              />
              <div className={cx("cart-list")}>
                <div className={cx("info-product", "row")}>
                  <div className={cx("title")}>
                    <h4 className={cx("name-product")}> ABC</h4>
                    <h4 className={cx("init-price")}>123 VND</h4>
                  </div>
                  <h4 className={cx("price")}>12345 VND</h4>
                </div>
                <div className={cx("action", "row")}>
                  <div className={cx("select", "c-8")}>
                    <div className={cx("select-item")}>
                      <h6>Size</h6>
                      <select>
                        <option>37</option>
                      </select>
                    </div>
                    <div className={cx("select-item")}>
                      <h6>Số lượng</h6>
                      <div className={cx("btn-quantity")}>
                        <input type="button" value="-" />
                        <input
                          aria-label="quantity"
                          max="10"
                          min="1"
                          name=""
                          type="number"
                          value="1"
                        />
                        <input type="button" value="+" />
                      </div>
                    </div>
                  </div>
                  <div className={cx("action-user", "c-4")}>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </div>
            </div>;
          })}
          <div className={cx("dot-line")}></div>
        </div>
        <div className={cx("order")}>
          <h3>ĐƠN HÀNG</h3>
          <hr className={cx("line")}></hr>
          <p className={cx("code-promotion")}>
            <i>
              Bạn có 1 mã khuyến mãi, nhập <b>TANRAU</b> để được giảm 10%
            </i>
          </p>
          <h4 className={cx("title-import")}>NHẬP MÃ KHUYẾN MÃI</h4>
          <input className={cx("input-import")} />
          <button className={cx("btn-apply")}>ÁP DỤNG</button>
          <div className={cx("dot-line")}></div>
          <div className={cx("price-order", "calculate")}>
            <p>Đơn Hàng</p>
            <p>132 VND</p>
          </div>
          <div className={cx("sale", "calculate")}>
            <p>Giảm</p>
            <p>0 VND</p>
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("total-price")}>
            <h3>TẠM TÍNH</h3>
            <h3>132 VND</h3>
          </div>
          <button className={cx("btn-pay")}>TIẾP TỤC THANH TOÁN</button>
        </div>
      </div>
      <button className={cx("btn-shopping")}>TIẾP TỤC MUA SẮM</button>
    </div>
  );
}

export default Cart;
