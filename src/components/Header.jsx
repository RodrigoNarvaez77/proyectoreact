import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="./images/logo ferretería blanco.png"
            alt="Logo Ferretería"
            className="w-60 h-auto"
          />
        </a>

        {/* Botón para menú móvil */}
        <button
          className="lg:hidden text-gray-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menú */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-8`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-4 lg:mt-0">
            <li>
              <a
                href="#cotizacion"
                className="text-white hover:text-gray-400 no-underline transition"
              >
                Cotización
              </a>
            </li>
            <li>
              <a
                href="#compromiso"
                className="text-white hover:text-gray-400 no-underline transition"
              >
                Compromiso
              </a>
            </li>
            <li>
              <a
                href="#pago"
                className="text-white hover:text-gray-400 no-underline transition"
              >
                Pago
              </a>
            </li>
            <li>
              <a
                href="#categorias"
                className="text-white hover:text-gray-400 no-underline transition"
              >
                Categorías
              </a>
            </li>
            <li>
              <a
                href="#redes"
                className="text-white hover:text-gray-400 no-underline transition"
              >
                Redes sociales
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
