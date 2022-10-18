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
import { productListSelector } from "../../redux/selectors";
import { addToCart } from "../../components/products/ProductsSlice";

const cx = className.bind(styles);

function Details() {
  const productList = useSelector(productListSelector);

  let { slug } = useParams();
  let product = productList.find((product) => product.slug === slug);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
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
          <img src={product.images[0].url} alt="" />
        </div>
        <div className={cx("info-product", "c-5")}>
          <h2>{product.name} </h2>
          <div className={cx("info-item")}>
            <p>Mã sản phẩm: {product.slug}</p>
            <p>Tình trạng: {product.status}</p>
          </div>
          <div className={cx("price")}>
            <h3 style={{ color: "#f15e2c", fontSize: "24px" }}>
              {product.price} VND
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
            <FontAwesomeIcon className={cx("icon-heart")} icon={faHeart} />
          </div>
          <div className={cx("params-product", "sub-title")}>
            <h3>
              THÔNG TIN SẢN PHẨM
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            <p>Gender: {product.info[0]}</p>
            <p>Size Run: {product.info[1]}</p>
            <p>Upper: {product.info[2]} </p>
            <p>Outsole: {product.info[3]} </p>
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("regulation", "sub-title")}>
            <h3>
              QUY ĐỊNH ĐỔI SẢN PHẨM
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            <p>
              Đối với những sản phẩm giày và thời trang thuộc phiên bản giới
              hạn. Vì nhiều lý do chúng tôi sẽ không áp dụng chính sách đổi
              hàng. Vui lòng cân nhắc kỹ trước khi quyết định mua.
            </p>
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("insurance", "sub-title")}>
            <h3>
              {" "}
              BẢO HÀNH THẾ NÀO ?
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            <p>
              Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu
              kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi:
              gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua
              hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có
              cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa
              hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong
              trung tâm TP.HCM trong giờ hành chính: Lầu 1, 75/1 Mai Thị Lựu, P.
              Đa Kao, Q1, TP.HCM Hotline: 028 3526 7774
            </p>
          </div>
          <div className={cx("dot-line")}></div>
        </div>
      </div>
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Details;
