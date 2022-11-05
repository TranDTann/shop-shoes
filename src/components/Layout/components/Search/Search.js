import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import { searchText } from "../../../../redux/reducers/FiltersSlice";

const cx = className.bind(styles);

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchText(e.target.value));
  };

  return (
    <div className={cx("search")}>
      <input
        className={cx("search-input")}
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <button className={cx("search-icon")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
