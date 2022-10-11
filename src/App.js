import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            // if (route.layout) {
            //   Layout = route.layout;
            // } else if (route.layout === null) {
            //   Layout = Fragment;
            // }
            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            }
            // if (route.layout) {
            //   Layout = route.layout;
            // } else if (route.layout === null) {
            //   Layout = Fragment;
            // }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
