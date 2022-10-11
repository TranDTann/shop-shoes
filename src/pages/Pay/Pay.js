import className from "classnames/bind";
import styles from "./Pay.module.scss";

const cx = className.bind(styles);

function Pay() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("pay-process")}>
        <div className={cx("first", "center")}>
          <button className={cx("btn-item")}>1</button>
          <p>
            <i>Login</i>
          </p>
        </div>
        <div className={cx("second", "center")}>
          <button className={cx("btn-item")}>2</button>
          <p>
            <i>Address</i>
          </p>
        </div>
        <div className={cx("third", "center")}>
          <button className={cx("btn-item")}>3</button>
          <p>
            <i>Payment</i>
          </p>
        </div>
        <div className={cx("line-process")}></div>
      </div>
      <div className={cx("line")}></div>
      <p className={cx("text-noti")}>Bạn cần đăng nhập để tiếp tục !</p>
      <h4 className={cx("choose-text")}>Choose your address below</h4>
      <div className={cx("info-user")}>
        <p>
          <b>Name</b>
        </p>
        <p>Address:</p>
        <p>Phone Number:</p>
        <button className={cx("btn-address")}>Use this address</button>
        <button className={cx("btn-remove")}>Remove</button>
      </div>
      <button className={cx("add-address")}>Add new address</button>
    </div>
  );
}

export default Pay;
