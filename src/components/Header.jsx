import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual
  console.log("Ruta actual:", location.pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Contenido dinámico basado en la ruta
  const isConstruccionPage = location.pathname === "/construccion";

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo dinámico */}
        <a href="#" className="flex items-center">
          <img
            src={
              isConstruccionPage
                ? "./images/logo solucenter construcción blanco.png" // Logo para Construcción
                : "./images/logo ferretería blanco.png" // Logo por defecto
            }
            alt={isConstruccionPage ? "Logo Construcción" : "Logo Ferretería"}
            className="w-60 h-auto"
          />
        </a>

        {/* Botón para menú móvil estilizado */}
        {/* Botón para menú móvil estilizado */}
        <button
          className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transform hover:scale-110 transition duration-300 ease-in-out"
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

        {/* Menú dinámico */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-8`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-4 lg:mt-0">
            {/* Rutas dinámicas según la página */}
            {isConstruccionPage ? (
              <>
                <li>
                  <a
                    href="#proyectos"
                    className="text-white hover:text-gray-400 no-underline transition"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#materiales"
                    className="text-white hover:text-gray-400 no-underline transition"
                  >
                    Materiales
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-white hover:text-gray-400 no-underline transition"
                  >
                    Contacto
                  </a>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
