import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p id="redes">
        &copy; 2024 Ferretería Solucenter. Todos los derechos reservados.
      </p>
      <div>
        <a
          href="https://instagram.com/solucenter_tienda"
          className="text-white me-3"
        >
          <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://tiktok.com/ferreteriasolucenter"
          className="text-white me-3"
        >
          <i className="bi bi-tiktok" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://facebook.com/ferreteriasolucenter"
          className="text-white me-3"
        >
          <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://youtube.com/ferreteriasolucenter"
          className="text-white me-3"
        >
          <i className="bi bi-youtube" style={{ fontSize: "24px" }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
