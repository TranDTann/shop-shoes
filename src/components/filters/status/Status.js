import className from "classnames/bind";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "../../Layout/DefaultLayout/Sidebar/Sidebar.module.scss";
import { listStatus } from "../../../redux/reducers/FiltersSlice";

const cx = className.bind(styles);

const arrStatus = [
  {
    name: "Limited Edition",
    status: "limitedEdition",
  },
  {
    name: "Online Only",
    status: "onlineOnly",
  },
  {
    name: "Sale Off",
    status: "saleOff",
  },
  {
    name: "Best Seller",
    status: "bestSeller",
  },
  {
    name: "New Arrival",
    status: "newArrival",
  },
];

function Status({ filterObject, statusList, setStatusList }) {
  const [clickTitle, setClickTitle] = useState(false);
  const dispatch = useDispatch();

  const handleAddStatusList = (status) => {
    let updateStatusList = [...statusList];
    if (updateStatusList.includes(status)) {
      updateStatusList = updateStatusList.filter((item) => item !== status);
    } else {
      updateStatusList.push(status);
    }
    setStatusList(updateStatusList);
    dispatch(listStatus(updateStatusList));
  };

  return (
    <div>
      <button
        className={cx("title-filter")}
        onClick={() => setClickTitle(!clickTitle)}
      >
        <h2>TRẠNG THÁI</h2>
        {clickTitle ? (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        )}
      </button>
      {clickTitle && (
        <ul className={cx("filter-list", "filter-list-status")}>
          {arrStatus.map((item, index) => (
            <li key={index} className={cx("filter-item", "mgb-10")}>
              <input
                checked={filterObject[item.status]}
                type="checkbox"
                onChange={() => handleAddStatusList(item.name)}
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={cx("dot-line")}></div>
    </div>
  );
}

export default Status;
