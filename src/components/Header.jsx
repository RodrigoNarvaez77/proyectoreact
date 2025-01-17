import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="./images/logo ferretería blanco.png"
              alt="Logo Ferretería"
              style={{ width: "250px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#cotizacion">
                  Cotización
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#compromiso">
                  Compromiso
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pago">
                  Pago
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categorias">
                  Categorías
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#redes">
                  Redes sociales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
