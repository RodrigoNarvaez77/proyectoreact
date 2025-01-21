import React, { useState } from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center focus:outline-none hover:bg-green-700 transition duration-300"
        onClick={toggleMenu}
      >
        <i className="bi bi-whatsapp text-3xl"></i>
      </motion.button>

      {/* Menú desplegable */}
      {menuVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-20 right-0 bg-white shadow-xl rounded-lg p-3 w-80 border border-gray-200"
          style={{
            maxHeight: "calc(100vh - 100px)", // Asegura que el menú no se salga del viewport
            overflowY: "auto", // Agrega un scroll si hay muchas sucursales
          }}
        >
          {/* Lista de sucursales */}
          <div className="space-y-2">
            {[
              {
                name: "Casa Matriz",
                address: "Condell 615, Arauco",
                link: "https://wa.me/+56976151892",
              },
              {
                name: "Sucursal Arauco",
                address: "O'Higgins 395",
                link: "https://wa.me/+56912345678",
              },
              {
                name: "Sucursal Curanilahue",
                address: "O'Higgins 810",
                link: "https://wa.me/+56987654321",
              },
              {
                name: "Sucursal Cañete",
                address: "Villagrán 1075",
                link: "https://wa.me/+56912312345",
              },
              {
                name: "Sucursal Huillinco",
                address: "Huillinco S/N",
                link: "https://wa.me/+56998798765",
              },
              {
                name: "Sucursal Santa Juana",
                address: "Lautaro 1097",
                link: "https://wa.me/+56965465432",
              },
            ].map((sucursal, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white bg-opacity-90 p-2 rounded-lg shadow flex justify-between items-center transition-transform duration-300"
              >
                <div>
                  <h5 className="font-bold text-sm text-gray-800">
                    {sucursal.name}
                  </h5>
                  <p className="text-xs text-gray-600">{sucursal.address}</p>
                </div>
                <a
                  href={sucursal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white rounded-full p-2 shadow-md hover:bg-green-700 transition duration-200 flex items-center justify-center"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i className="bi bi-whatsapp text-lg"></i>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppButton;
