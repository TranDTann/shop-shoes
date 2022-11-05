import className from "classnames/bind";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Heart.module.scss";
const cx = className.bind(styles);

function Heart({ product }) {
  return product?.isFavourite ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="32"
      viewBox="0 -2 36 32"
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
  );
}

export default Heart;
