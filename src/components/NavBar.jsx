import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import logoNavbar from "../imgs/desconecta-logo.png";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const greenPages = ["/", "/sobre", "/desafio"]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Impede o scroll do body quando o menu móvel está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const bgClass = greenPages.includes(location.pathname)
    ? "bg-verde"
    : "bg-bege";

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Docs", path: "/documentos" },
    { label: "Testes", path: "/testes" },
    { label: "Desafio", path: "/desafio" },
  ];

  return (
    <header
      className={`bg-backgound sticky top-0 z-50 transition-shadow duration-300 overflow-visible ${hasScrolled ? "shadow-nav-scroll" : ""
        }`}
    >
      <nav className="flex justify-between items-center h-[80px] px-6 md:px-12">
        <div className="hover:cursor-pointer" onClick={handleLogoClick}>
          <img
            src={logoNavbar}
            alt="Logo do Desconecta.ai"
            className="w-auto h-10 object-contain"
          />
        </div>
        <ul className="hidden md:flex gap-8 text-principalText">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`hover:underline underline-offset-[5px] transition-all duration-300 ${location.pathname === item.path
                ? "opacity-100 underline"
                : "opacity-50"
                }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-principalText"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
        </button>
      </nav>

      {/* Overlay de fundo */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu lateral móvel */}
      <div
        className={`${bgClass} md:hidden flex flex-col gap-6 bg-backgound text-principalText text-lg fixed top-0 right-0 h-full w-64 z-50 p-6 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end mb-8">
          <button
            className="text-principalText"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <XIcon size={28} />
          </button>
        </div>

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`hover:underline underline-offset-[5px] transition-all duration-300 py-2 ${location.pathname === item.path
              ? "opacity-100 underline"
              : "opacity-50"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavBar;