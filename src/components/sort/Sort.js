import className from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import styles from "./Sort.module.scss";

const cx = className.bind(styles);

function Sort({ productList, handleSort }) {
  const [sort, setSort] = useState("Sắp xếp theo");
  const [clickSort, setClickSort] = useState(false);
  const ref = useRef(null);

  const handleSelectSort = (type, value, name) => {
    setSort(name);
    setClickSort(!clickSort);
    handleSort(type, value);
  };

  useEffect(() => {
    const handleClickoutside = (e) => {
      if (e.path[0] !== ref.current) {
        setClickSort(false);
      }
    };
    document.addEventListener("click", handleClickoutside);
    return () => document.removeEventListener("click", handleClickoutside);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setClickSort(!clickSort);
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("quantity-product")}>{productList.length} items</p>

      <div className={cx("select-price")} ref={ref}>
        <button
          className={cx("btn-select")}
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="select-price"
          aria-expanded="false"
          onClick={(e) => handleClick(e)}
        >
          {sort}
          <div className={cx("icon-down")}></div>
        </button>

        {clickSort && (
          <ul
            className={cx("select-list")}
            aria-labelledby="dropdownMenuButton"
          >
            <li
              style={
                sort === "Tên A - Z"
                  ? {
                      backgroundColor: "#e9ecef",
                      fontWeight: "600",
                    }
                  : {}
              }
              onClick={() => handleSelectSort("name", 1, "Tên A - Z")}
            >
              Tên A - Z
            </li>
            <li
              style={
                sort === "Tên Z - A"
                  ? {
                      backgroundColor: "#e9ecef",
                      fontWeight: "600",
                    }
                  : {}
              }
              onClick={() => handleSelectSort("name", -1, "Tên Z - A")}
            >
              Tên Z - A
            </li>
            <li
              style={
                sort === "Giá tăng dần"
                  ? {
                      backgroundColor: "#e9ecef",
                      fontWeight: "600",
                    }
                  : {}
              }
              onClick={() => handleSelectSort("price", 1, "Giá tăng dần")}
            >
              Giá tăng dần
            </li>
            <li
              style={
                sort === "Giá giảm dần"
                  ? {
                      backgroundColor: "#e9ecef",
                      fontWeight: "600",
                    }
                  : {}
              }
              onClick={() => handleSelectSort("price", -1, "Giá giảm dần")}
            >
              Giá giảm dần
            </li>
            <li
              style={
                sort === "Top Seller"
                  ? {
                      backgroundColor: "#e9ecef",
                      fontWeight: "600",
                    }
                  : {}
              }
              onClick={() => handleSelectSort("seller", -1, "Top Seller")}
            >
              Top Seller
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
