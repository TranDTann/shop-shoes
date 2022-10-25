import className from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import {
  fetchProductCart,
  fetchProductFavourite,
} from "../../components/products/ProductsSlice";
import { cartListSelector } from "../../redux/selectors";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const cx = className.bind(styles);

function Cart() {
  const [codePromotion, setCodePromotion] = useState("");
  const [apply, setApply] = useState(false);
  const refInput = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCart());
    dispatch(fetchProductFavourite());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cartList = useSelector(cartListSelector);
  console.log(cartList);

  let totalPrice = cartList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCodePromotion = () => {
    if (codePromotion === "TANRAU") {
      setApply(true);
      setCodePromotion("");
      refInput.current.focus();
      toast.success("Mã khuyến mãi đã được áp dụng!", {});
    } else if (codePromotion !== "TANRAU" && apply === true) {
      setApply(false);
      refInput.current.focus();
      toast.error("Mã khuyến mãi chưa được áp dụng!", {});
    } else if (codePromotion !== "TANRAU") {
      setApply(false);
      refInput.current.focus();
      toast.error("Mã khuyến mãi chưa được áp dụng!", {});
    }
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleWarn = () => {
    toast.warn("Giỏ hàng của bạn đang trống!");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner", "row")}>
        <div className={cx("cart", "c-8")}>
          <h3>GIỎ HÀNG</h3>
          <p>Tổng: {cartList.length} sản phẩm</p>
          {cartList.length > 0 ? (
            cartList.map((product) => (
              <CartItem product={product} formatCash={formatCash} />
            ))
          ) : (
            <div className={cx("cart-empty")}>
              <p className={cx("title-cart-empty")}>
                Giỏ hàng của bạn đang trống !
              </p>
              <Link to="/products">
                {" "}
                <button className={cx("btn-return")}>QUAY LẠI CỬA HÀNG</button>
              </Link>
            </div>
          )}
        </div>
        <div className={cx("order", "c-4")}>
          <div className={cx("inner-order")}>
            <h3>ĐƠN HÀNG</h3>
            <hr className={cx("line")}></hr>
            <p className={cx("code-promotion")}>
              <i>
                Bạn có 1 mã khuyến mãi, nhập <b>TANRAU</b> để được giảm 10%
              </i>
            </p>
            <h4 className={cx("title-import")}>NHẬP MÃ KHUYẾN MÃI</h4>
            <input
              ref={refInput}
              className={cx("input-import")}
              value={codePromotion}
              onChange={(e) => setCodePromotion(e.target.value)}
            />
            <button
              className={cx("btn-apply")}
              onClick={() => handleCodePromotion()}
            >
              ÁP DỤNG
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            {apply && (
              <p className={cx("status-apply")}>
                Mã khuyến mãi đã được áp dụng
              </p>
            )}
            <div className={cx("dot-line")}></div>
            <div className={cx("price-order", "calculate")}>
              <p>Đơn Hàng</p>
              <p>{formatCash(String(totalPrice))} VND</p>
            </div>
            <div className={cx("sale", "calculate")}>
              <p>Giảm</p>
              <p>{apply ? formatCash(String(totalPrice / 10)) : 0} VND</p>
            </div>
            <div className={cx("dot-line")}></div>
            <div className={cx("total-price")}>
              <h3>TẠM TÍNH</h3>
              <h3>
                {apply
                  ? formatCash(String(totalPrice * 0.9))
                  : formatCash(String(totalPrice))}{" "}
                VND
              </h3>
            </div>
            {cartList.length > 0 ? (
              <Link to="/pay">
                <button className={cx("btn-pay")}>TIẾP TỤC THANH TOÁN</button>
              </Link>
            ) : (
              <button className={cx("btn-pay")} onClick={() => handleWarn()}>
                TIẾP TỤC THANH TOÁN
              </button>
            )}
          </div>
        </div>
      </div>
      {cartList.length > 0 && (
        <Link to="/products">
          <button className={cx("btn-shopping")}>TIẾP TỤC MUA SẮM</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
