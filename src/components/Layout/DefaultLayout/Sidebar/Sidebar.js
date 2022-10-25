import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterObjectSelector } from "../../../../redux/selectors";

import Color from "../../../filters/color/Color";
import { resetFilterObject } from "../../../filters/FiltersSlice";
import Price from "../../../filters/price/Price";
import Status from "../../../filters/status/Status";
import Style from "../../../filters/style/Style";
import Substance from "../../../filters/substance/Substance";
import Type from "../../../filters/type/Type";

import styles from "./Sidebar.module.scss";

const cx = className.bind(styles);

function Sidebar() {
  const [statusList, setStatusList] = useState([]);

  const filterObject = useSelector(filterObjectSelector);

  const dispatch = useDispatch();

  let initFilterObject = {
    saleOff: false,
    onlineOnly: false,
    limitedEdition: false,
    newArrival: false,
    bestSeller: false,
    style: "All",
    type: "All",
    price: 990000,
    color: "",
    substance: "ALL",
    removeFilter: false,
  };

  const handleRemove = () => {
    dispatch(resetFilterObject(initFilterObject));
    setStatusList([]);
  };

  let newFilterObject = { ...filterObject, removeFilter: false };
  if (JSON.stringify(newFilterObject) === JSON.stringify(initFilterObject)) {
    newFilterObject.removeFilter = false;
  } else newFilterObject.removeFilter = true;

  return (
    <div className={cx("sidebar", "c-3-6")}>
      <h4 className={cx("title")}>LỌC THEO</h4>
      {newFilterObject.removeFilter && (
        <button className={cx("btn-remove")} onClick={() => handleRemove()}>
          Remove Filter
          <FontAwesomeIcon className={cx("icon-remove")} icon={faSquareXmark} />
        </button>
      )}
      <div className={cx("filter")}>
        <Status
          filterObject={filterObject}
          statusList={statusList}
          setStatusList={setStatusList}
        />
      </div>
      <div className={cx("filter")}>
        <Style filterObject={filterObject} />
      </div>
      <div className={cx("filter")}>
        <Type filterObject={filterObject} />
      </div>
      <div className={cx("filter-price")}>
        <Price />
      </div>
      <div className={cx("filter-color")}>
        <Color />
      </div>
      <div className={cx("filter-material")}>
        <Substance />
      </div>
    </div>
  );
}

export default Sidebar;
