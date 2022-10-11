import className from "classnames/bind";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
