import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Contenido dinámico basado en la ruta
  const isConstruccionPage = location.pathname === "/construccion";

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo dinámico */}
        <a href="/" className="flex items-center">
          <img
            src={
              isConstruccionPage
                ? "./images/logo solucenter construcción blanco.png" // Logo para Construcción
                : "./images/logo ferretería blanco.png" // Logo por defecto
            }
            alt={isConstruccionPage ? "Logo Construcción" : "Logo Ferretería"}
            className="w-40 h-auto"
          />
        </a>

        {/* Botón para menú móvil */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
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
            menuOpen
              ? "fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6"
              : "hidden"
          } lg:flex lg:items-center lg:gap-8 lg:relative lg:bg-transparent lg:space-y-0 lg:space-x-6 lg:py-0`}
        >
          {/* Botón de cierre para menú móvil */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 lg:hidden text-gray-200 hover:text-gray-400 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-6">
            {/* Rutas dinámicas según la página */}
            {isConstruccionPage ? (
              <>
                <li>
                  <a
                    href="#proyectos"
                    className="text-white hover:text-gray-400 transition"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#materiales"
                    className="text-white hover:text-gray-400 transition"
                  >
                    Materiales
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-white hover:text-gray-400 transition"
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
                    className="text-white hover:text-gray-400 transition"
                  >
                    Cotización
                  </a>
                </li>
                <li>
                  <a
                    href="#compromiso"
                    className="text-white hover:text-gray-400 transition"
                  >
                    Compromiso
                  </a>
                </li>
                <li>
                  <a
                    href="#pago"
                    className="text-white hover:text-gray-400 transition"
                  >
                    Compras
                  </a>
                </li>
                <li>
                  <a
                    href="#categorias"
                    className="text-white hover:text-gray-400 transition"
                  >
                    Categorías
                  </a>
                </li>
                <li>
                  <a
                    href="#redes"
                    className="text-white hover:text-gray-400 transition"
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
