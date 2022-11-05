import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search/Search";
import styles from "./Header.module.scss";
import {
  cartListSelector,
  currTabSelector,
  favouritesProductSelector,
  isLoginSelector,
} from "../../../../redux/selectors";
import DrowdownList from "../../../dropdownList/DropdownList";
import { setCurrTab, setLogin } from "../../../../redux/reducers/ProductsSlice";

const cx = className.bind(styles);

function Header() {
  const productCart = useSelector(cartListSelector);
  const productFavourite = useSelector(favouritesProductSelector);
  const dispatch = useDispatch();

  let isLogin = useSelector(isLoginSelector);

  const handleLogin = () => {
    dispatch(setLogin(!isLogin));
  };
  const currTab = useSelector(currTabSelector);
  const handleChangeTab = (tab) => {
    dispatch(setCurrTab(tab));
  };

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
                <button
                  className={cx("btn-tab", currTab === "home" && "active")}
                  onClick={() => handleChangeTab("home")}
                >
                  HOME
                </button>
              </Link>
              <Link className={cx("navbar-item")} to="/products">
                <button
                  className={cx("btn-tab", currTab === "all" && "active")}
                  onClick={() => handleChangeTab("all")}
                >
                  ALL SHOES
                </button>
              </Link>
              <Link className={cx("navbar-item")} to="/products/men">
                <button
                  className={cx("btn-tab", currTab === "men" && "active")}
                  onClick={() => handleChangeTab("men")}
                >
                  MEN
                </button>
              </Link>
              <Link className={cx("navbar-item")} to="/products/women">
                <button
                  className={cx("btn-tab", currTab === "women" && "active")}
                  onClick={() => handleChangeTab("women")}
                >
                  WOMEN
                </button>
              </Link>
            </div>
            <Search />
            <button className={cx("heart-icon", "icon-general")}>
              <FontAwesomeIcon icon={faHeart} />
              <div className={cx("quantity")}>{productFavourite.length}</div>

              <div className={cx("products")}>
                <DrowdownList type="heart" products={productFavourite} />
              </div>
            </button>
            <button className={cx("cart-icon", "icon-general")}>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={cx("quantity")}>{productCart?.length}</div>
              <div className={cx("products")}>
                <DrowdownList type="cart" products={productCart} />
              </div>
            </button>
            {isLogin ? (
              <button className={cx("user")} onClick={() => handleLogin()}>
                Tân{" "}
                <FontAwesomeIcon
                  className={cx("icon-log-out")}
                  icon={faRightFromBracket}
                />
              </button>
            ) : (
              <button className={cx("log-in")} onClick={() => handleLogin()}>
                Log in
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={cx("header-slide")}>
        {/* eslint-disable-next-line */}
        <marquee width="50%" scrollamount="4">
          HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH
        </marquee>
      </div>
    </div>
  );
}

export default Header;
