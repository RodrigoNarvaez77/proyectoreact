import React from "react";

const Compromiso = () => {
  return (
    <section className="white-background">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="compromiso" className="display-4 fw-bold">
            Comprometidos en cada etapa de tu proyecto
          </h2>
          <p className="lead">
            Tenemos todo lo necesario para tu proyecto. Nuestro amplio stock
            asegura disponibilidad en todos nuestros productos, garantizando
            calidad y eficiencia en cada paso.
          </p>
        </div>
        <div className="row justify-content-around text-center">
          <div className="col-md-2">
            <i className="bi bi-box2 fs-1 text-success"></i>
            <h5 className="fw-bold mt-3">Amplio Stock</h5>
            <p>
              Garantizamos disponibilidad constante para satisfacer tus
              necesidades.
            </p>
          </div>
          <div className="col-md-2">
            <i className="bi bi-people fs-1 text-success"></i>
            <h5 className="fw-bold mt-3">Gran Equipo</h5>
            <p>
              Nuestro personal está comprometido con un servicio cordial y
              eficiente.
            </p>
          </div>
          <div className="col-md-2">
            <i className="bi bi-cash-coin fs-1 text-success"></i>
            <h5 className="fw-bold mt-3">Buenos Precios</h5>
            <p>
              Ofrecemos productos de calidad a precios competitivos y
              accesibles.
            </p>
          </div>
          <div className="col-md-2">
            <i className="bi bi-patch-check fs-1 text-success"></i>
            <h5 className="fw-bold mt-3">Calidad</h5>
            <p>
              Calidad superior garantizada en cada pieza, con precisión y
              excelencia.
            </p>
          </div>
          <div className="col-md-2">
            <i className="bi bi-clock-history fs-1 text-success"></i>
            <h5 className="fw-bold mt-3">Rápida Respuesta</h5>
            <p>
              Respondemos con prontitud para resolver tus requerimientos de
              manera efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromiso;
