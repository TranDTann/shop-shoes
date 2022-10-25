import className from "classnames/bind";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Slideshow from "../../components/Layout/components/Slider/Sider";
import {
  fetchProductCart,
  fetchProductFavourite,
  fetchProducts,
} from "../../components/products/ProductsSlice";
import styles from "./Home.module.scss";

const cx = className.bind(styles);

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductFavourite());
    dispatch(fetchProductCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Slideshow />
      <div className={cx("shopping-list")}>
        <h2 className={cx("title")}>DANH MỤC MUA HÀNG</h2>
        <div className={cx("category-list")}>
          <div className={cx("category-item")}>
            <div className={cx("bgi")}>
              <img
                className={cx("bgi-item")}
                src="https://ananas.vn/wp-content/uploads/catalogy-1.jpg"
                alt=""
              />
            </div>
            <div className={cx("list-select")}>
              <a className={cx("title-list")} href="/">
                GIÀY NAM
              </a>
              <a className={cx("item-select")} href="/">
                New Arrivals
              </a>
              <a className={cx("item-select")} href="/">
                Best Seller
              </a>
              <a className={cx("item-select")} href="/">
                Sale-off
              </a>
            </div>
          </div>
          <div className={cx("category-item")}>
            <div>
              <img
                className={cx("bgi-item")}
                src="https://ananas.vn/wp-content/uploads/catalogy-2.jpg"
                alt=""
              />
            </div>
            <div className={cx("list-select")}>
              <a className={cx("title-list")} href="/">
                GIÀY NỮ
              </a>
              <a className={cx("item-select")} href="/">
                New Arrivals
              </a>
              <a className={cx("item-select")} href="/">
                Best Seller
              </a>
              <a className={cx("item-select")} href="/">
                Sale-off
              </a>
            </div>
          </div>
          <div className={cx("category-item")}>
            <div className={cx("bgi")}>
              <img
                className={cx("bgi-item")}
                src="https://ananas.vn/wp-content/uploads/catalogy-3.jpg"
                alt=""
              />
            </div>
            <div className={cx("list-select")}>
              <a className={cx("title-list")} href="/">
                DÒNG SẢN PHẨM
              </a>
              <a className={cx("item-select")} href="/">
                Basas
              </a>
              <a className={cx("item-select")} href="/">
                Vintas
              </a>
              <a className={cx("item-select")} href="/">
                Urbas
              </a>
              <a className={cx("item-select")} href="/">
                Pattas
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("background")}>
        <img
          src="https://trungbach.netlify.app/static/media/Banner_Clothing.e1ee86f1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
