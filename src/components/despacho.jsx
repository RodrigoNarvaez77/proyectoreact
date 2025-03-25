import React from "react";

const Despacho = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen a la izquierda */}
        <div className="w-full">
          <img
            src="/images/despacho.png" // Reemplaza si es necesario
            alt="Despacho Solucenter"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Información a la derecha */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 ml-6">
            Despacho Gratuito 🛻
          </h2>

          <ul className="text-gray-800 text-lg space-y-3 font-light leading-relaxed">
            <li>
              <strong className="text-gray-900 font-semibold">Zonas:</strong>{" "}
              Arauco, O'Higgins, Curanilahue, Cañete, Huillinco, Santa Juana.
            </li>
            <li>
              <strong className="text-gray-900 font-semibold">Horarios:</strong>
              <br />
              Lunes a Viernes: 9:00 a 14:00 y 15:00 a 18:00
              <br />
              Sábados: 10:00 a 14:00
            </li>
            <li>
              Atención personalizada y amplia variedad de productos con entrega
              segura y rápida.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Despacho;
