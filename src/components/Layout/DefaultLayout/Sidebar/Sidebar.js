import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";

import styles from "./Sidebar.module.scss";

const cx = className.bind(styles);

function Sidebar() {
  return (
    <div className={cx("sidebar", "c-4")}>
      <h4 className={cx("title")}>LỌC THEO</h4>
      <div className={cx("filter")}>
        <button className={cx("title-filter")}>
          <h2>TRẠNG THÁI</h2>
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        </button>
        <ul className={cx("filter-list")}>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"checkbox"} />
            <p>Limited Edition</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"checkbox"} />
            <p>Online Only</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"checkbox"} />
            <p>Sale Off</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"checkbox"} />
            <p>Best Seller</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"checkbox"} />
            <p>New Arrival</p>
          </li>
        </ul>
        <div className={cx("dot-line")}></div>
      </div>
      <div className={cx("filter")}>
        <button className={cx("title-filter")}>
          <h2>KIỂU DÁNG</h2>
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        </button>
        <ul className={cx("filter-list")}>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>All</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>Low Top</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>High Top</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>Slip-On</p>
          </li>
        </ul>
        <div className={cx("dot-line")}></div>
      </div>
      <div className={cx("filter")}>
        <button className={cx("title-filter")}>
          <h2>DÒNG SẢN PHẨM</h2>
          <FontAwesomeIcon className={cx("down-icon")} icon={faChevronDown} />
        </button>
        <ul className={cx("filter-list")}>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>All</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>Vintas</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>Urbas</p>
          </li>
          <li className={cx("filter-item", "mgb-10")}>
            <input type={"radio"} />
            <p>Pattas</p>
          </li>
        </ul>
        <div className={cx("dot-line")}></div>
      </div>
      <div className={cx("filter-price")}>
        <div className={cx("title-filter")}>
          <h2>GIÁ</h2>
        </div>
        <div className={cx("price")}>
          <p className={cx("des-price")}>Price: 0 to 990000 VND</p>
          <input
            className={cx("price-slider")}
            type="range"
            min="1"
            max="990000"
            value="990000"
          />
        </div>
        <div className={cx("dot-line")}></div>
      </div>
      <div className={cx("filter-color")}>
        <div className={cx("title-filter")}>
          <h2>MÀU SẮC </h2>
        </div>
        <div className={cx("list-color")}>
          <button style={{ backgroundColor: "rgb(109, 110, 114)" }} />
          <button style={{ backgroundColor: "rgb(253, 225, 130)" }} />
          <button style={{ backgroundColor: "rgb(45, 44, 47)" }} />
          <button style={{ backgroundColor: "rgb(178, 212, 231)" }} />
          <button style={{ backgroundColor: "rgb(108, 107, 97)" }} />
          <button style={{ backgroundColor: "rgb(198, 198, 199)" }} />
          <button style={{ backgroundColor: "rgb(214, 203, 184)" }} />
          <button style={{ backgroundColor: "rgb(53, 72, 94)" }} />
          <button style={{ backgroundColor: "rgb(253, 225, 130)" }} />
          <button style={{ backgroundColor: "rgb(180, 207, 217)" }} />
          <button style={{ backgroundColor: "rgb(224, 208, 183)" }} />
          <button style={{ backgroundColor: "rgb(153, 123, 56)" }} />
        </div>
        <div className={cx("dot-line")}></div>
      </div>
      <div className={cx("filter-material")}>
        <div className={cx("title-filter")}>
          <h2>CHẤT LIỆU</h2>
        </div>
        <select className={cx("select-material")}>
          <option className={cx("item")}>ALL</option>
          <option>LEATHER</option>
          <option>SUEDE</option>
          <option>CANVAS</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
