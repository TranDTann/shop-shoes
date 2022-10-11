import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Search from "../Search/Search";
import styles from "./Header.module.scss";
const cx = className.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("wrapper")}>
        <div className={cx("inner")}>
          <a href="/">
            <img
              className={cx("logo")}
              src="	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
              alt="logo"
            />
          </a>
          <div className={cx("colapse-navbar")}>
            <div className={cx("list-navbar")}>
              <a className={cx("navbar-item")} href="/">
                HOME
              </a>
              <a className={cx("navbar-item")} href="/products">
                ALL SHOES
              </a>
              <a className={cx("navbar-item")} href="/products/men">
                MEN
              </a>
              <a className={cx("navbar-item")} href="/products/women">
                WOMEN
              </a>
            </div>
            <Search />
            <button className={cx("heart-icon")}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className={cx("cart-icon")}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className={cx("log-in")}>Log in</button>
          </div>
        </div>
      </div>
      <div className={cx("header-slide")}>
        {/* eslint-disable-next-line */}
        <marquee
          className="slide"
          width="50%"
          scrollamount="4"
          onmouseover="this.stop();"
          onmouseout="this.start();"
        >
          HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH
        </marquee>
      </div>
    </div>
  );
}

export default Header;
