import Home from "../pages/Home/Home";

import Details from "../pages/Details/Details";

import Pay from "../pages/Pay/Pay";
import Cart from "../pages/Cart/Cart";

import HeaderFooter from "../components/Layout/HeaderFooter/HeaderFooter";
import Product from "../pages/Products/Products";

//Nhung Route khong can dang nhap van xem duoc
export const publicRoutes = [
  { path: "/", component: Home, layout: HeaderFooter },
  { path: "/products", component: Product },
  { path: "/products/men", component: Details, layout: HeaderFooter },
];

//Nhung Route phai dang nhap moi xem duoc. Neu khong dang nhap thi khi vao nhung trang nay se duoc tu dong chuyen sang trang Login
export const privateRoutes = [
  { path: "/cart", component: Cart, layout: HeaderFooter },
  { path: "/pay", component: Pay, layout: HeaderFooter },
];
