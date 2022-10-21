import { Link, useParams } from "react-router-dom";
import {
  faCartPlus,
  faChevronDown,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Details.module.scss";
import {
  favouritesProductSelector,
  productListSelector,
  slugFavouritesProductSelector,
} from "../../redux/selectors";
import {
  addToCart,
  deleteProductFavourite,
  favouritesProduct,
} from "../../components/products/ProductsSlice";
import { useState } from "react";

const cx = className.bind(styles);

function Details() {
  const [imgMain, setImgMain] = useState(0);

  const [clickRegulations, setClickRegulations] = useState(false);
  const [clickInsurance, setClickInsurance] = useState(false);

  const productList = useSelector(productListSelector);
  const slugFavouritesProduct = useSelector(slugFavouritesProductSelector);

  let { slug } = useParams();
  let product = productList.find((product) => product.slug === slug);

  let floor = Math.floor(product.price / 1000);
  console.log(floor);

  let mod = product.price % 1000;
  console.log(mod);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const arrFavouritesProduct = useSelector(favouritesProductSelector);
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
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link className={cx("return-shop")} to="/products">
          <FontAwesomeIcon className={cx("icon-left")} icon={faLeftLong} />
          QUAY LẠI SHOP
        </Link>
      </div>
      <div className={cx("detail-product", "row")}>
        <div className={cx("img-product", "c-7")}>
          <img src={product.images[imgMain].url} alt="" />
          <div className={cx("img-other")}>
            <div className={cx("c-3")}>
              <img
                style={
                  imgMain === 0
                    ? {
                        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
                      }
                    : {}
                }
                src={product.images[0].url}
                alt=""
                onClick={() => setImgMain(0)}
              />
            </div>
            <div className={cx("c-3")}>
              <img
                style={
                  imgMain === 1
                    ? {
                        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
                      }
                    : {}
                }
                src={product.images[1].url}
                alt=""
                onClick={() => setImgMain(1)}
              />
            </div>
            <div className={cx("c-3")}>
              <img
                style={
                  imgMain === 2
                    ? {
                        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
                      }
                    : {}
                }
                src={product.images[2].url}
                alt=""
                onClick={() => setImgMain(2)}
              />
            </div>
            <div className={cx("c-3")}>
              <img
                style={
                  imgMain === 3
                    ? {
                        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
                      }
                    : {}
                }
                src={product.images[3].url}
                alt=""
                onClick={() => setImgMain(3)}
              />
            </div>
          </div>
        </div>
        <div className={cx("info-product", "c-5")}>
          <h2>{product.name} </h2>
          <div className={cx("info-item")}>
            <p>Mã sản phẩm: {product.slug}</p>
            <p>
              Tình trạng:{" "}
              {product.status ? (
                <span className={cx("name-status")}>{product.status}</span>
              ) : (
                "Còn hàng"
              )}
            </p>
          </div>
          <div className={cx("price")}>
            <h3 style={{ color: "#f15e2c", fontSize: "24px" }}>
              {`${floor},${mod}00`} VND
            </h3>
            <p>Đã Bán: {product.sold}</p>
          </div>
          <div className={cx("dot-line")}></div>

          <p className={cx("des-product")}>{product.overview}</p>
          <div className={cx("dot-line")}></div>

          <div className={cx("select")}>
            <div className={cx("size")}>
              <h3>SIZE</h3>
              <select className={cx("select-tag")}>
                <option>Choose...</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
              </select>
            </div>
            <div className={cx("quantity")}>
              <h3>SỐ LƯỢNG</h3>
              <input />
            </div>
          </div>
          <div className={cx("action")}>
            <button
              className={cx("add")}
              onClick={() => handleAddToCart(product)}
            >
              <FontAwesomeIcon className={cx("icon-cart")} icon={faCartPlus} />
              ADD TO CART
            </button>
            <button
              className={cx("heart")}
              onClick={() => handleClickHeart(product)}
            >
              {slugFavouritesProduct.includes(product.slug) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.5"
                  height="29.2"
                  viewBox="0 0 32.5 29.2"
                  className={cx("svg-heart")}
                  style={{
                    fill: "#f15e2c",
                  }}
                >
                  <path
                    class="cls-1"
                    d="M16.25,8.8749A7.5051,7.5051,0,0,0,7.49,1.4777,7.7789,7.7789,0,0,0,1.25,9.2762v.2422a7.5,7.5,0,0,0,2.1967,5.3033L16.25,27.6249,29.0532,14.8217A7.5,7.5,0,0,0,31.25,9.5184V9.2762a7.7789,7.7789,0,0,0-6.24-7.7985,7.505,7.505,0,0,0-8.76,7.3972"
                  />
                </svg>
              ) : (
                <FontAwesomeIcon
                  className={cx("icon-heart")}
                  icon={faHeart}
                  style={{
                    color: "#f15e2c",
                  }}
                />
              )}
            </button>
          </div>
          <div className={cx("params-product", "sub-title")}>
            <h3>
              THÔNG TIN SẢN PHẨM
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            <p>
              Gender:
              <span className={cx("gender-info")}>{product.info[0]}</span>
            </p>
            <p>Size Run: {product.info[1]}</p>
            <p>Upper: {product.info[2]} </p>
            <p>Outsole: {product.info[3]} </p>
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("regulation", "sub-title")}>
            <h3 onClick={() => setClickRegulations(!clickRegulations)}>
              QUY ĐỊNH ĐỔI SẢN PHẨM
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            {clickRegulations && (
              <p>
                Đối với những sản phẩm giày và thời trang thuộc phiên bản giới
                hạn. Vì nhiều lý do chúng tôi sẽ không áp dụng chính sách đổi
                hàng. Vui lòng cân nhắc kỹ trước khi quyết định mua.
              </p>
            )}
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("insurance", "sub-title")}>
            <h3 onClick={() => setClickInsurance(!clickInsurance)}>
              BẢO HÀNH THẾ NÀO ?
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            {clickInsurance && (
              <p>
                Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu
                kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các
                lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ
                ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp
                chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm
                về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành
                Ananas ngay trong trung tâm TP.HCM trong giờ hành chính: Lầu 1,
                75/1 Mai Thị Lựu, P. Đa Kao, Q1, TP.HCM Hotline: 028 3526 7774
              </p>
            )}
          </div>
          <div className={cx("dot-line")}></div>
        </div>
      </div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Details;
