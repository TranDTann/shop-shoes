import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = className.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-top", "row")}>
        <img
          className={cx("footer-logo", "c-3")}
          src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg"
          alt=""
        />
        <div className={cx("footer-list", "c-9", "row")}>
          <div className={cx("footer-item", "c-3")}>
            <h3 className={cx("title")}>SẢN PHẨM</h3>
            <ul className={cx("list")}>
              <li>Giày Nam</li>
              <li>Giày Nữ</li>
              <li>Thời Trang - Phụ Kiện</li>
              <li>Sale-Of</li>
            </ul>
          </div>
          <div className={cx("footer-item", "c-3")}>
            <h3 className={cx("title")}>VỀ CÔNG TY</h3>
            <ul className={cx("list")}>
              <li>Dứa Tuyển Dụng</li>
              <li>Liên Hệ Nhượng Quyền</li>
              <li>Về Ananas</li>
            </ul>
          </div>
          <div className={cx("footer-item", "c-3")}>
            <h3 className={cx("title")}>HỖ TRỢ</h3>
            <ul className={cx("list")}>
              <li>FAQs</li>
              <li>Bảo Mật Thông Tin</li>
              <li>Chính Sách Chung</li>
              <li>Tra Cứu Đơn Hàng</li>
            </ul>
          </div>
          <div className={cx("footer-item", "c-3")}>
            <h3 className={cx("title")}>LIÊN HỆ</h3>
            <ul className={cx("list")}>
              <li>Email Góp Ý</li>
              <li>Hotline</li>
              <li>0362587255</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("footer-bottom", "row")}>
        <button className={cx("btn-store", "c-3")}>TÌM CỬA HÀNG</button>
        <div className={cx("footer-bottom-list", "row", "c-9")}>
          <div className={cx("social", "c-3")}>
            <h3 className={cx("title-social")}>ANANAS SOCIAL</h3>
            <div className={cx("social-icon")}>
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg"
                alt=""
              />
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg"
                alt=""
              />
              <img
                src="	https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg"
                alt=""
              />
            </div>
          </div>
          <div className={cx("receive-mail", "c-3")}>
            <h3 className={cx("title-receive-mail")}>ĐĂNG KÝ NHẬN MAIL</h3>
            <input className={cx("input-email")}></input>
            <button className={cx("btn-arrow-right")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className={cx("footer-bottom-logo")}>
            <img
              src="https://trungbach.netlify.app/static/media/Logo_Ananas_Footer.2072b09d.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
