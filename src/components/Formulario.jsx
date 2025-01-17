import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false); // Para manejar el estado del botón
  const [notification, setNotification] = useState({ message: "", type: "" }); // Notificación

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar el formulario con EmailJS
  const enviarFormulario = (e) => {
    e.preventDefault(); // Prevenir recarga de la página
    setLoading(true);

    emailjs
      .send(
        "service_k65j17r", // Reemplaza con tu Service ID de EmailJS
        "template_bs86x61", // Reemplaza con tu Template ID de EmailJS
        {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        },
        "fHj28KP1AWBuCIBG1" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (result) => {
          setNotification({
            message: "Formulario enviado correctamente.",
            type: "success",
          });
          setFormData({ nombre: "", email: "", telefono: "", mensaje: "" }); // Limpiar formulario
        },
        (error) => {
          setNotification({
            message: "Error al enviar el formulario. Inténtalo más tarde.",
            type: "error",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  // Temporizador para ocultar la notificación después de 3 segundos
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(
        () => setNotification({ message: "", type: "" }),
        3000
      );
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [notification]);

  // Renderizar notificación
  const renderNotification = () => {
    if (notification.message) {
      return (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="image-container">
      <img src="/images/fotoedificio.png" alt="sucursales" />
      <div className="overlay">
        <h2>Solicita una Cotización</h2>
        {renderNotification()}
        <form id="contactForm" onSubmit={enviarFormulario}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              placeholder="Tu teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="3"
              placeholder="Detalles de tu consulta"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Cotización"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
