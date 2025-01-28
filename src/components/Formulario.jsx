import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Formulario = ({ backgroundImage }) => {
  const [formData, setFormData] = useState({
    nombre: "",
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
          nombre: formData.nombre,
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
          setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
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
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-start p-6 ml-20">
        <div className="w-full max-w-md bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Solicita una Cotización
          </h2>

          {showNotification && (
            <div
              className={`mb-4 p-4 rounded-md ${
                notification.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.message}
            </div>
          )}
          <form id="contactForm" onSubmit={enviarFormulario}>
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
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
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
