import { Link, useParams } from "react-router-dom";
import {
  faCartPlus,
  faChevronDown,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import styles from "./Details.module.scss";
import {
  cartListSelector,
  productListFilterSelector,
} from "../../redux/selectors";
import Heart from "../../components/heart/Heart";
import { addToCart, editCart } from "../../redux/reducers/CartsSlice";
import { updateProducts } from "../../redux/reducers/ProductsSlice";

const cx = className.bind(styles);

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44];

function Details() {
  const [imgMain, setImgMain] = useState(0);
  const [size, setSize] = useState("Choose...");
  const [quantity, setQuantity] = useState(0);
  const [clickRegulations, setClickRegulations] = useState(false);
  const [clickInsurance, setClickInsurance] = useState(false);
  const dispatch = useDispatch();
  let { slug } = useParams();
  const cartList = useSelector(cartListSelector);
  const productListFilter = useSelector(productListFilterSelector);
  let product = productListFilter.find((product) => product.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let dataAddToCart = {
    slug: product?.slug,
    size: size,
    quantity: Number(quantity),
  };

  const handleAddToCart = (product) => {
    if (size !== "Choose..." && quantity > 0) {
      if (cartList.length > 0) {
        let newCart = cartList.filter((item) => item.slug === product.slug);
        if (newCart.length > 0) {
          var i = 0;
          for (i = 0; i < newCart.length; i++) {
            if (size === newCart[i].size) {
              let id = newCart[i].id;
              let updateQuantity =
                Number(quantity) + Number(newCart[i].quantity);
              console.log(updateQuantity);
              toast.success("Cập nhật giỏ hàng thành công !");
              dispatch(editCart({ totalQuantity: updateQuantity, id }));
              break;
            }
          }

          if (i === newCart.length) {
            toast.success("Thêm vào giỏ hàng thành công !");
            dispatch(addToCart(dataAddToCart));
          }
        } else {
          toast.success("Thêm vào giỏ hàng thành công !");
          dispatch(addToCart(dataAddToCart));
        }
      } else {
        toast.success("Thêm vào giỏ hàng thành công !");
        dispatch(addToCart(dataAddToCart));
      }
    } else {
      toast.warn("Vui lòng nhập đủ thông tin về size và số lượng !", {});
    }
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleClickHeart = () => {
    dispatch(
      updateProducts({ id: product.id, isFavourite: !product.isFavourite })
    );
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
          <img src={product?.images[imgMain].url} alt="" />
          <div className={cx("img-other")}>
            {product?.images.map((image, index) => (
              <div className={cx("c-3")}>
                <img
                  className={cx(imgMain === index && "img-item")}
                  src={image.url}
                  alt=""
                  onClick={() => setImgMain(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={cx("info-product", "c-5")}>
          <h2>{product?.name} </h2>
          <div className={cx("info-item")}>
            <p>Mã sản phẩm: {product?.slug}</p>
            <p>
              Tình trạng:{" "}
              {product?.status ? (
                <span className={cx("name-status")}>{product?.status}</span>
              ) : (
                "Còn hàng"
              )}
            </p>
          </div>
          <div className={cx("price")}>
            <h3 style={{ color: "#f15e2c", fontSize: "24px" }}>
              {formatCash(String(product?.price))} VND
            </h3>
            <p>Đã Bán: {product?.sold}</p>
          </div>
          <div className={cx("dot-line")}></div>

          <p className={cx("des-product")} style={{ textAlign: "justify" }}>
            {product?.overview}
          </p>
          <div className={cx("dot-line")}></div>

          <div className={cx("select")}>
            <div className={cx("size")}>
              <h3>SIZE</h3>
              <select
                className={cx("select-tag")}
                value={size}
                onChange={(e) => handleChangeSize(e)}
              >
                <option>Choose...</option>
                {sizes.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>
            <div className={cx("quantity")}>
              <h3>SỐ LƯỢNG</h3>
              <input
                value={quantity}
                onChange={(e) => handleChangeQuantity(e)}
              />
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
            <button className={cx("heart")} onClick={handleClickHeart}>
              <Heart product={product} />
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

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
              <span className={cx("gender-info")}> {product?.info[0]}</span>
            </p>
            <p>Size Run: {product?.info[1]}</p>
            <p>Upper: {product?.info[2]} </p>
            <p>Outsole: {product?.info[3]} </p>
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
              <p style={{ textAlign: "justify" }}>
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
              <p style={{ textAlign: "justify" }}>
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
