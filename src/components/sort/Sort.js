import className from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { isRemoveFilterSelected } from "../../redux/selectors";

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
  let isRemoveFilter = useSelector(isRemoveFilterSelected);

  const handleSelectSort = (type) => {
    setType(type);
    setClickSort(!clickSort);
  };

  if (isRemoveFilter === false) {
    setType();
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.path[0] !== ref.current) {
        setClickSort(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickSort = (e) => {
    e.stopPropagation();
    setClickSort(!clickSort);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("select-price")} ref={ref}>
        <button
          className={cx("btn-select")}
          onClick={(e) => handleClickSort(e)}
        >
          {type ? type.label : "Sắp xếp theo"}
          <div className={cx("icon-down")}></div>
        </button>

        {clickSort && (
          <ul className={cx("select-list")}>
            {sortTypes.map((sortType, index) => (
              <li
                key={index}
                style={
                  type === sortType
                    ? {
                        backgroundColor: "#e9ecef",
                        fontWeight: "600",
                      }
                    : {}
                }
                onClick={() => handleSelectSort(sortType)}
              >
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
