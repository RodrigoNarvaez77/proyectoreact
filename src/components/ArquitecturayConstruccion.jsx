import React from "react";

const Arquitecturayconstruccion = () => {
  return (
    <section class="banner bg-light text-center py-5">
      <div class="container">
        <h3 class="custom-title">
          Servicios de arquitectura y Gestión de la construcción.
        </h3>
        <br />
        <div class="row justify-content-center">
          <div class="col-12 col-md-4 mb-4">
            <img
              src="./images/imagen1.png"
              alt="Producto 1"
              class="img-fluid project-img"
            />
          </div>
          <div class="col-12 col-md-4 mb-4">
            <img
              src="./images/imagen2.png"
              alt="Producto 2"
              class="img-fluid project-img"
            />
          </div>
          <div class="col-12 col-md-4 mb-4">
            <img
              src="./images/imagen3.png"
              alt="Producto 3"
              class="img-fluid project-img"
            />
          </div>
        </div>
        <p class="custom-title">Diseñamos y construimos.</p>
        <a href="construccion.html" class="btn btn-primary" id="visit-button">
          Visítanos
        </a>
      </div>
    </section>
  );
};

export default Arquitecturayconstruccion;
