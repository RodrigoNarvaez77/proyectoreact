import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  console.log("Ruta actual Footer:", location.pathname);

  // Contenido dinámico basado en la ruta
  const isConstruccionPage = location.pathname === "/construccion";

  return (
    <footer className="bg-black text-gray-100 text-center py-6">
      <p className="text-sm mb-4">
        &copy; 2024 Ferretería Solucenter. Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-6">
        {isConstruccionPage ? (
          // Instagram específico para la página de construcción
          <a
            href="https://instagram.com/solucenter_construccion"
            aria-label="Instagram Construcción"
            className="text-gray-100 hover:text-gray-300 transition"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
        ) : (
          // Redes sociales generales
          <>
            <a
              href="https://instagram.com/solucenter_tienda"
              aria-label="Instagram"
              className="text-gray-100 hover:text-gray-300 transition"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
              href="https://tiktok.com/ferreteriasolucenter"
              aria-label="TikTok"
              className="text-gray-100 hover:text-gray-300 transition"
            >
              <i className="bi bi-tiktok text-2xl"></i>
            </a>
            <a
              href="https://facebook.com/ferreteriasolucenter"
              aria-label="Facebook"
              className="text-gray-100 hover:text-gray-300 transition"
            >
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a
              href="https://youtube.com/ferreteriasolucenter"
              aria-label="YouTube"
              className="text-gray-100 hover:text-gray-300 transition"
            >
              <i className="bi bi-youtube text-2xl"></i>
            </a>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
