import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search/Search";
import styles from "./Header.module.scss";
import {
  favouritesProductSelector,
  slugFavouritesProductSelector,
} from "../../../../redux/selectors";
import {
  deleteProductFavourite,
  favouritesProduct,
} from "../../../products/ProductsSlice";

const cx = className.bind(styles);

function Header() {
  const productFavourite = useSelector(favouritesProductSelector);

  const dispatch = useDispatch();

  const arrFavouritesProduct = useSelector(favouritesProductSelector);
  const slugFavouritesProduct = useSelector(slugFavouritesProductSelector);

  const handleClickHeart = (data) => {
    let productDeleted = arrFavouritesProduct.find(
      (item) => item.slug === data.slug
    );
    if (!slugFavouritesProduct.includes(data.slug)) {
      dispatch(favouritesProduct(data));
    } else {
      dispatch(deleteProductFavourite(productDeleted.id));
    }
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
              <div className={cx("quantity")}>{productFavourite.length}</div>
              <div className={cx("products-favourite")}>
                {productFavourite.length > 0 ? (
                  productFavourite.map((product) => (
                    <div className={cx("product-item", "row")}>
                      <div className={cx("img", "c-3-6")}>
                        <img
                          className={cx("img-product")}
                          src={product.images[0].url}
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
                            {`${Math.floor(product.price / 1000)},${
                              product.price % 1000
                            }00`}{" "}
                            VND
                          </p>
                          <button
                            className={cx("heart")}
                            onClick={() => handleClickHeart(product)}
                          >
                            <FontAwesomeIcon
                              className={cx("icon-heart")}
                              icon={faCircleXmark}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={cx("noti-empty")}>
                    Chưa có sản phẩm yêu thích
                  </div>
                )}
              </div>
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
        <marquee width="50%" scrollamount="4">
          HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH
        </marquee>
      </div>
    </div>
  );
}

export default Header;
