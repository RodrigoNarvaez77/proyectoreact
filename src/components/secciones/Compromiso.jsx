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
            <section className="bg-white py-20">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                  Gestión Integral de Proyectos
                </h2>
                <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
                  Nuestro enfoque estructurado nos permite ofrecer un servicio
                  eficiente y de alta calidad en todas las etapas del proyecto.
                </p>

                {/* Contenedor único con bullets */}
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-10 shadow-lg text-left">
                  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
                    <li>Programa de Trabajo.</li>
                    <li>Antecedentes, Requerimientos.</li>
                    <li>
                      Análisis de Factibilidad Técnico-Regulatoria-Económica.
                    </li>
                    <li>Diseño Conceptual.</li>
                    <li>Documentos de Arquitectura y Especialidades.</li>
                    <li>Gestión de Permisos.</li>
                    <li>
                      Planificación de Materiales y Maestros Contratistas.
                    </li>
                    <li>Ejecución.</li>
                    <li>Inspección Técnica de Obras.</li>
                    <li>Recepción Final.</li>
                    <li>Garantía.</li>
                  </ul>
                </div>
              </div>
            </section>
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
