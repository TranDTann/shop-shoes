import Home from "../pages/Home/Home";
import Pay from "../pages/Pay/Pay";
import Cart from "../pages/Cart/Cart";
import HeaderFooter from "../components/Layout/HeaderFooter/HeaderFooter";
import ProductList from "../components/products/ProductList";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";

//Nhung Route khong can dang nhap van xem duoc
export const publicRoutes = [
  { path: "/", component: Home, layout: HeaderFooter },
  { path: "/products", component: ProductList },
  { path: "/products/men", component: Men },
  { path: "/products/women", component: Women },
];

//Nhung Route phai dang nhap moi xem duoc. Neu khong dang nhap thi khi vao nhung trang nay se duoc tu dong chuyen sang trang Login
export const privateRoutes = [
  { path: "/cart", component: Cart, layout: HeaderFooter },
  { path: "/pay", component: Pay, layout: HeaderFooter },
];
