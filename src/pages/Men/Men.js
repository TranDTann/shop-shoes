import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../../components/products/ProductList";
import { setCurrTab } from "../../redux/reducers/ProductsSlice";

function Men() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrTab("men"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductList gender="men" />
    </div>
  );
}

export default Men;
