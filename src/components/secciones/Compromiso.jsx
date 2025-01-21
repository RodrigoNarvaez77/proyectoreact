import React from "react";

const Compromiso = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('../images/ferretera_solucenter_cover.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 id="compromiso" className="text-4xl font-bold text-gray-800">
            Comprometidos en cada etapa de tu proyecto
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Tenemos todo lo necesario para tu proyecto. Nuestro amplio stock
            asegura disponibilidad en todos nuestros productos, garantizando
            calidad y eficiencia en cada paso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <i className="bi bi-box2 text-5xl text-green-700"></i>
            <h5 className="text-xl font-semibold mt-4 text-gray-800">
              Amplio Stock
            </h5>
            <p className="text-gray-600 mt-2">
              Garantizamos disponibilidad constante para satisfacer tus
              necesidades.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-people text-5xl text-green-700"></i>
            <h5 className="text-xl font-semibold mt-4 text-gray-800">
              Gran Equipo
            </h5>
            <p className="text-gray-600 mt-2">
              Nuestro personal está comprometido con un servicio cordial y
              eficiente.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-cash-coin text-5xl text-green-700"></i>
            <h5 className="text-xl font-semibold mt-4 text-gray-800">
              Buenos Precios
            </h5>
            <p className="text-gray-600 mt-2">
              Ofrecemos productos de calidad a precios competitivos y
              accesibles.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-patch-check text-5xl text-green-700"></i>
            <h5 className="text-xl font-semibold mt-4 text-gray-800">
              Calidad
            </h5>
            <p className="text-gray-600 mt-2">
              Calidad superior garantizada en cada pieza, con precisión y
              excelencia.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-clock-history text-5xl text-green-700"></i>
            <h5 className="text-xl font-semibold mt-4 text-gray-800">
              Rápida Respuesta
            </h5>
            <p className="text-gray-600 mt-2">
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
