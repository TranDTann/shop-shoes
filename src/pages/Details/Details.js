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
import { updateProductFavourite } from "../../redux/reducers/ProductsSlice";

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
              let newQuantity = Number(quantity) + Number(newCart[i].quantity);
              toast.success("C???p nh???t gi??? h??ng th??nh c??ng !");
              dispatch(editCart({ newQuantity, id }));
              break;
            }
          }

          if (i === newCart.length) {
            toast.success("Th??m v??o gi??? h??ng th??nh c??ng !");
            dispatch(addToCart(dataAddToCart));
          }
        } else {
          toast.success("Th??m v??o gi??? h??ng th??nh c??ng !");
          dispatch(addToCart(dataAddToCart));
        }
      } else {
        toast.success("Th??m v??o gi??? h??ng th??nh c??ng !");
        dispatch(addToCart(dataAddToCart));
      }
    } else {
      toast.warn("Vui l??ng nh???p ????? th??ng tin v??? size v?? s??? l?????ng !", {});
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
      updateProductFavourite({
        id: product.id,
        isFavourite: !product.isFavourite,
      })
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link className={cx("return-shop")} to="/products">
          <FontAwesomeIcon className={cx("icon-left")} icon={faLeftLong} />
          QUAY L???I SHOP
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
            <p>
              M?? s???n ph???m: <i>{product?.slug}</i>
            </p>
            <p>
              T??nh tr???ng:{" "}
              {product?.status ? (
                <span className={cx("name-status")}>{product?.status}</span>
              ) : (
                <i>C??n h??ng</i>
              )}
            </p>
          </div>
          <div className={cx("price")}>
            <h3 style={{ color: "#f15e2c", fontSize: "24px" }}>
              {formatCash(String(product?.price))} VND
            </h3>
            <p>???? B??n: {product?.sold}</p>
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
              <h3>S??? L?????NG</h3>
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
              TH??NG TIN S???N PH???M
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            <p>
              <b>Gender:</b>
              <span className={cx("gender-info")}> {product?.info[0]}</span>
            </p>
            <p>
              <b>Size Run:</b> {product?.info[1]}
            </p>
            <p>
              <b>Upper:</b> {product?.info[2]}{" "}
            </p>
            <p>
              <b>Outsole:</b> {product?.info[3]}{" "}
            </p>
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("regulation", "sub-title")}>
            <h3 onClick={() => setClickRegulations(!clickRegulations)}>
              QUY ?????NH ?????I S???N PH???M
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            {clickRegulations && (
              <p style={{ textAlign: "justify" }}>
                ?????i v???i nh???ng s???n ph???m gi??y v?? th???i trang thu???c phi??n b???n gi???i
                h???n. V?? nhi???u l?? do ch??ng t??i s??? kh??ng ??p d???ng ch??nh s??ch ?????i
                h??ng. Vui l??ng c??n nh???c k??? tr?????c khi quy???t ?????nh mua.
              </p>
            )}
          </div>
          <div className={cx("dot-line")}></div>
          <div className={cx("insurance", "sub-title")}>
            <h3 onClick={() => setClickInsurance(!clickInsurance)}>
              B???O H??NH TH??? N??O ?
              <FontAwesomeIcon
                className={cx("down-icon")}
                icon={faChevronDown}
              />
            </h3>
            {clickInsurance && (
              <p style={{ textAlign: "justify" }}>
                M???i ????i gi??y Ananas tr?????c khi xu???t x?????ng ?????u tr???i qua nhi???u kh??u
                ki???m tra. Tuy v???y, trong qu?? tr??nh s??? d???ng, n???u nh???n th???y c??c
                l???i: g??y ?????, h??? ?????, ?????t ch??? may,...trong th???i gian 6 th??ng t???
                ng??y mua h??ng, mong b???n s???m g???i s???n ph???m v??? Ananas nh???m gi??p
                ch??ng t??i c?? c?? h???i ph???c v??? b???n t???t h??n. Vui l??ng g???i s???n ph???m
                v??? b???t k??? c???a h??ng Ananas n??o, ho???c g???i ?????n trung t??m b???o h??nh
                Ananas ngay trong trung t??m TP.HCM trong gi??? h??nh ch??nh: L???u 1,
                75/1 Mai Th??? L???u, P. ??a Kao, Q1, TP.HCM Hotline: 028 3526 7774
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
