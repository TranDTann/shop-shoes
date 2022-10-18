import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import GlobalStyles from "./components/GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.querySelector("title").innerText = "ShoesShop";

root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
