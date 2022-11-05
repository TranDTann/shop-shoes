import className from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import styles from "./Sort.module.scss";

const cx = className.bind(styles);

const sortTypes = [
  { label: "Tên A - Z", type: "nameIncrease" },
  { label: "Tên Z - A", type: "nameDecrease" },
  { label: "Giá tăng dần", type: "priceIncrease" },
  { label: "Giá giảm dần", type: "priceDecrease" },
  { label: "Top Seller", type: "topSeller" },
];

function Sort({ type, setType }) {
  const [clickSort, setClickSort] = useState(false);
  const ref = useRef(null);

  const handleSelectSort = (type) => {
    setType(type);
    setClickSort(!clickSort);
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
      <div className={cx("select-price")} ref={ref}>
        <button
          className={cx("btn-select")}
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="select-price"
          aria-expanded="false"
          onClick={(e) => handleClick(e)}
        >
          {type ? type.label : "Sắp xếp theo"}
          <div className={cx("icon-down")}></div>
        </button>

        {clickSort && (
          <ul
            className={cx("select-list")}
            aria-labelledby="dropdownMenuButton"
          >
            {sortTypes.map((sortType, index) => (
              <li
                key={index}
                style={
                  type === sortType.type
                    ? {
                        backgroundColor: "#e9ecef",
                        fontWeight: "600",
                      }
                    : {}
                }
                onClick={() => handleSelectSort(sortType)}
              >
                {" "}
                {sortType.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
