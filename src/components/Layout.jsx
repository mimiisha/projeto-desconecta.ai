import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation()
  const greenPages = ["/", "/sobre", "/desafio"]

  const bgClass = greenPages.includes(location.pathname)
    ? "bg-verde"
    : "bg-bege";

  return (
    <div className={`${bgClass} min-h-screen flex flex-col`}>
      <NavBar />
      <ScrollToTop />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
