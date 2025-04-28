import React from "react";
import { motion } from "framer-motion";

const Despacho = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen primero en mobile (ordenada por reverse en md+) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-none"
        >
          <img
            src="/images/despacho.png"
            alt="Despacho Solucenter"
            className="w-full h-auto object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Información a la derecha (o debajo en mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 ml-2">
            Despacho Gratuito
          </h2>

          <ul className="text-gray-800 text-lg space-y-3 font-light leading-relaxed px-2">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Despacho;
