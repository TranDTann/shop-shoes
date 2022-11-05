import className from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { isLoginSelector } from "../../redux/selectors";
import styles from "./Pay.module.scss";

const cx = className.bind(styles);

function Pay() {
  const [address, setAddress] = useState(false);
  const isLogin = useSelector(isLoginSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("pay-process")}>
        <div className={cx("first", "center")}>
          <button className={cx("btn-item", isLogin && "color")}>1</button>
          <p>
            <i>Login</i>
          </p>
          <div className={cx("line-process-first", isLogin && "color")}></div>
        </div>
        <div className={cx("second", "center")}>
          <button className={cx("btn-item", isLogin && "color")}>2</button>
          <p>
            <i>Address</i>
          </p>
        </div>
        <div className={cx("third", "center")}>
          <button className={cx("btn-item", address && isLogin && "color")}>
            3
          </button>
          <p>
            <i>Payment</i>
          </p>
          <div
            className={cx("line-process-second", address && isLogin && "color")}
          ></div>
        </div>
      </div>
      <div className={cx("line")}></div>
      {address && isLogin ? (
        <p className={cx("thank-text")}>
          Thank you for payment. Have a good day !
        </p>
      ) : (
        <>
          {isLogin ? (
            <p></p>
          ) : (
            <p className={cx("text-noti")}>Bạn cần đăng nhập để tiếp tục !</p>
          )}
          <h4 className={cx("choose-text")}>Choose your address below</h4>
          <div className={cx("info-user")}>
            <p>
              <b>Name: Tan</b>
            </p>
            <p>Address: Ha Tinh</p>
            <p>Phone Number: 0123456789</p>
            <button
              className={cx("btn-address")}
              onClick={() => setAddress(!address)}
            >
              Use this address
            </button>
            <button className={cx("btn-remove")}>Remove</button>
          </div>
          <button className={cx("add-address")}>Add new address</button>
        </>
      )}
    </div>
  );
}

export default Pay;
