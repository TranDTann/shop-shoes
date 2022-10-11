import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";

const cx = className.bind(styles);

function Search() {
  return (
    <div className={cx("search")}>
      <input className={cx("search-input")} placeholder="Search" />
      <button className={cx("search-icon")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
