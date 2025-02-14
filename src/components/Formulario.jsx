import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion"; // Importamos las herramientas de framer-motion

const Formulario = ({ backgroundImage }) => {
  const [formData, setFormData] = useState({
    rut: "",
    nombre: "",
    comuna: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_k65j17r",
        "template_bs86x61",
        {
          rut: formData.rut,
          nombre: formData.nombre,
          comuna: formData.comuna,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        },
        "fHj28KP1AWBuCIBG1"
      )
      .then(
        () => {
          setNotification({
            message: "Formulario enviado correctamente.",
            type: "success",
          });
          setShowNotification(true);
          setFormData({
            rut: "",
            nombre: "",
            comuna: "",
            email: "",
            telefono: "",
            mensaje: "",
          });
        },
        () => {
          setNotification({
            message: "Error al enviar el formulario. Inténtalo más tarde.",
            type: "error",
          });
          setShowNotification(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contenedor de la notificación en la esquina superior derecha */}
      <div className="absolute top-10 right-10 z-50">
        <AnimatePresence>
          {showNotification && (
            <motion.div
              className={`p-4 rounded-md shadow-lg ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
              initial={{ opacity: 0, x: 50 }} // Aparece desde la derecha
              animate={{ opacity: 1, x: 0 }} // Se mueve a su posición normal
              exit={{ opacity: 0, x: 50 }} // Desaparece hacia la derecha
              transition={{ duration: 0.5 }}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contenedor del formulario */}
      <div className="flex flex-grow items-center justify-start p-6 sm:ml-10 lg:ml-20">
        <div className="w-full max-w-lg bg-opacity-80 bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Solicita una Cotización
          </h2>

          <form id="contactForm" onSubmit={enviarFormulario}>
            <div className="mb-4">
              <label
                htmlFor="rut"
                className="block text-sm font-medium text-white"
              >
                Rut
              </label>
              <input
                type="text"
                id="rut"
                name="rut"
                placeholder="Tu rut"
                value={formData.rut}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="comuna"
                className="block text-sm font-medium text-white"
              >
                Comuna
              </label>
              <input
                type="text"
                id="comuna"
                name="comuna"
                placeholder="Tu comuna"
                value={formData.comuna}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-white"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-white"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="3"
                placeholder="Detalles de tu consulta"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#4b4f75] to-[#2d3557] hover:bg-gradient-to-r hover:from-[#2d3557] hover:to-[#434762] focus:ring-2 focus:ring-blue-500"
              }`}
            >
              {loading ? "Enviando..." : "Enviar Cotización"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
