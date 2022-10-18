import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
              <Link className={cx("navbar-item")} to="/">
                <button className={cx("btn-tab")}>HOME</button>
              </Link>
              <Link className={cx("navbar-item")} to="/products">
                <button className={cx("btn-tab")}>ALL SHOES</button>
              </Link>
              <Link className={cx("navbar-item")} to="/products/men">
                <button className={cx("btn-tab")}>MEN</button>
              </Link>
              <Link className={cx("navbar-item")} to="/products/women">
                <button className={cx("btn-tab")}>WOMEN</button>
              </Link>
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
        <marquee className="slide" width="50%" scrollamount="4">
          HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH
        </marquee>
      </div>
    </div>
  );
}

export default Header;
