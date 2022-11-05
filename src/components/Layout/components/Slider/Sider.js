import className from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Sider.module.scss";

const cx = className.bind(styles);

function Slideshow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className={cx("img-animation")}
            src="https://trungbach.netlify.app/static/media/KV_Urbas_Unsettling_Banner_Desktop_1920x1050.9ad864ba.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={cx("img-animation")}
            src="https://trungbach.netlify.app/static/media/AnanasxLuckyLuke-Pack_banner_desktop.4c3cf006.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={cx("img-animation")}
            src="https://trungbach.netlify.app/static/media/Corluray_bannerweb_desktop1920x1050.95e27ef7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={cx("img-animation")}
            src="https://trungbach.netlify.app/static/media/banner-chi%CC%81nh_2.7d154aaf.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
