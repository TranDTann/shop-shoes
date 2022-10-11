import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function HeaderFooter({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderFooter;
