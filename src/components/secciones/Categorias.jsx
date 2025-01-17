import React from "react";

const Categorias = () => {
  return (
    <section className="white-background">
      <div className="container">
        <div className="row text-center align-items-stretch">
          <h3 id="categorias" className="custom-title-large">
            Categorías
          </h3>
          <div className="col-md-4 feature-item fade-in d-flex flex-column">
            <img
              src="/images/pelotaproductos.png"
              alt="Productos"
              className="img-fluid project-img rounded-element"
            />
            <h3 className="custom-title">Productos</h3>
            <p className="custom-text-small">
              Amplia gama de herramientas y materiales de construcción.
            </p>
          </div>
          <div className="col-md-4 feature-item fade-in d-flex flex-column">
            <img
              src="/images/servicios.png"
              alt="Servicios"
              className="img-fluid project-img rounded-element"
            />
            <h3 className="custom-title">Servicios</h3>
            <p className="custom-text-small">
              Despachos gratis Arauco, Curanilahue, Cañete, Huillinco, Santa
              Juana.
            </p>
          </div>
          <div className="col-md-4 feature-item fade-in d-flex flex-column">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1zNKJjn5B9lpbGxrwn258gD8XFoZQhkY&ehbc=2E312F"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="custom-title">Mapa</h3>
            <p className="custom-text-small">
              Conoce nuestras sucursales en la Región del Bio-Bío.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorias;
