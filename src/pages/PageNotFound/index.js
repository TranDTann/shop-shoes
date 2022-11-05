import { useEffect } from "react";
import "./index.css";

function PageNotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text">
      <h2>404 Page Not Found</h2>
    </div>
  );
}

export default PageNotFound;
