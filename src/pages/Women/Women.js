import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../../components/products/ProductList";
import { setCurrTab } from "../../redux/reducers/ProductsSlice";

function Women() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrTab("women"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductList gender="women" />
    </div>
  );
}

export default Women;
