import React from "react";
import { useLocation } from "react-router-dom";

const Compromiso = () => {
  const location = useLocation(); // Obtener la ruta actual

  // Determinar si estamos en la ruta "construcción"
  const isConstruccionPage = location.pathname === "/construccion";

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: isConstruccionPage
          ? "url('../images/constru2.png')" // Imagen de fondo para construcción
          : "url('../images/ferretera_solucenter_cover.png')", // Imagen de fondo por defecto
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        {/* Contenido dinámico según la ruta */}
        {isConstruccionPage ? (
          <>
            {/* Contenido para la página de construcción */}
            <div className="text-center mb-5">
              <h2 id="compromiso" className="text-4xl font-bold text-gray-800">
                Comprometidos con tus proyectos de construcción
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Proveemos soluciones integrales para tus proyectos de
                construcción. Con un inventario completo y un equipo
                especializado, garantizamos calidad, eficiencia y soporte en
                cada etapa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              <div className="flex flex-col items-center">
                <i className="bi bi-bricks text-5xl text-blue-700"></i>
                <h5 className="text-xl font-semibold mt-4 text-gray-800">
                  Materiales de Calidad
                </h5>
                <p className="text-gray-600 mt-2">
                  Ofrecemos los mejores materiales para garantizar la
                  durabilidad de tus proyectos.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-person-lines-fill text-5xl text-blue-700"></i>
                <h5 className="text-xl font-semibold mt-4 text-gray-800">
                  Asesoría Experta
                </h5>
                <p className="text-gray-600 mt-2">
                  Un equipo de especialistas listos para apoyarte en cada paso
                  de tu proyecto.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-truck text-5xl text-blue-700"></i>
                <h5 className="text-xl font-semibold mt-4 text-gray-800">
                  Logística Eficiente
                </h5>
                <p className="text-gray-600 mt-2">
                  Entregamos materiales de manera rápida y segura directamente a
                  tu obra.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-gear-wide-connected text-5xl text-blue-700"></i>
                <h5 className="text-xl font-semibold mt-4 text-gray-800">
                  Herramientas Modernas
                </h5>
                <p className="text-gray-600 mt-2">
                  Equipamiento de última generación para trabajos más precisos y
                  eficientes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-hammer text-5xl text-blue-700"></i>
                <h5 className="text-xl font-semibold mt-4 text-gray-800">
                  Soluciones Integrales
                </h5>
                <p className="text-gray-600 mt-2">
                  Todo lo que necesitas para construcción en un solo lugar, al
                  mejor precio.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Contenido por defecto */}
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
          </>
        )}
      </div>
    </section>
  );
};

export default Compromiso;
