import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"; // Ícono del chat

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el chatbot
  const [messages, setMessages] = useState([
    { text: "🤖 ¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [input, setInput] = useState(""); // Entrada del usuario
  const [loading, setLoading] = useState(false); // Estado para mostrar "escribiendo..."

  // 📌 Función para manejar el envío de mensajes al backend
  const handleSend = async () => {
    if (!input.trim()) {
      console.warn("⚠️ Advertencia: el mensaje está vacío o no es válido.");
      return; // Evita enviar mensajes vacíos
    }

    // Agregar el mensaje del usuario al chat
    const userMessage = { text: input.trim(), sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput(""); // Limpiar el campo de entrada
    setLoading(true); // Mostrar "escribiendo..."

    try {
      // Crear el cuerpo de la solicitud
      const requestBody = JSON.stringify({ mensaje: input.trim() });
      console.log("📤 Enviando a la API:", requestBody);

      const response = await fetch(
        "https://nodejsasistentevirtual-1.onrender.com/api/data/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBody,
        }
      );

      console.log("📩 Respuesta de la API:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error HTTP: ${response.status} - ${
            errorData.error || "Error desconocido"
          }`
        );
      }

      const data = await response.json();
      setLoading(false);

      // Agregar la respuesta del bot al chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `🤖 ${data.respuesta}`, sender: "bot" },
      ]);
    } catch (error) {
      setLoading(false);
      console.error("❌ Error al conectar con la API:", error);

      // Mostrar el error en el chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `❌ Error: ${error.message}`, sender: "bot" },
      ]);
    }
  };

  return (
    <>
      {/* Contenedor del chatbot */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-5 bg-white shadow-lg p-4 w-80 rounded-lg z-50"
        >
          {/* Header del chatbot */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Asistente Virtual Solucenter</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>

          {/* Mensajes del chatbot */}
          <div className="h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* Mostrar "Escribiendo..." cuando la API está procesando */}
            {loading && (
              <div className="text-left text-gray-500">🤖 Escribiendo...</div>
            )}
          </div>

          {/* Campo de entrada del usuario */}
          <div className="flex w-full max-w-[400px] mt-2 mx-auto p-0">
            <input
              className="flex-1 max-w-[65%] border border-gray-300 p-2 rounded-l-lg focus:outline-none bg-gray-100"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe algo..."
              disabled={loading} // Deshabilitar si está cargando
            />
            <button
              className={`px-4 py-2 rounded-r-lg ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={handleSend}
              disabled={loading} // Deshabilitar si está cargando
            >
              Enviar
            </button>
          </div>
        </motion.div>
      )}

      {/* Botón flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-[90px] w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg z-50"
        whileTap={{ scale: 0.9 }}
      >
        <IoChatbubbleEllipsesOutline size={28} />
      </motion.button>
    </>
  );
};

export default Chatbot;
