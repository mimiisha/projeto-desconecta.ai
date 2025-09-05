import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const greenPages = ["/", "/sobre", "/desafio"];

  const bgClass = greenPages.includes(location.pathname)
    ? "bg-azul"
    : "bg-verde";

  return (
    <footer
      className={`${bgClass} w-full text-black pt-6 pb-10 mt-10 shadow-sm flex justify-center`}
    >
      <div className="px-4">
        <p className="text-xs md:text-sm text-center">
          © {new Date().getFullYear()} Desconecta.ai - Promovendo o equilíbrio
          digital através do design consciente.
          <br />
          Um projeto para inspirar a reconexão - Misha e Jayne Matias.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
