import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"; // Ícono del chat

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "🤖 ¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Lista de sucursales
  const sucursales = [
    {
      name: "Casa Matriz",
      address: "Condell 615, Arauco",
    },
    {
      name: "Sucursal Arauco",
      address: "O'Higgins 395",
    },
    {
      name: "Sucursal Curanilahue",
      address: "O'Higgins 810",
    },
    {
      name: "Sucursal Cañete",
      address: "Villagrán 1075",
    },
    {
      name: "Sucursal Huillinco",
      address: "Huillinco S/N",
    },
    {
      name: "Sucursal Santa Juana",
      address: "Lautaro 1097",
    },
  ];

  // 📌 Función para determinar la respuesta del bot
  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase().trim();

    // Variantes de saludos
    const saludos = [
      "hola",
      "ola",
      "holas",
      "buenas",
      "qué tal",
      "hey",
      "saludos",
    ];
    if (saludos.some((saludo) => lowerCaseMessage.includes(saludo))) {
      const respuestasSaludo = ["🤖 ¡Hola! ¿Cómo puedo ayudarte?"];
      return respuestasSaludo[
        Math.floor(Math.random() * respuestasSaludo.length)
      ];
    }

    // Variantes de horario
    if (
      lowerCaseMessage.includes("horario") ||
      lowerCaseMessage.includes("atención")
    ) {
      return "🤖Nuestro horario de atención es de lunes a viernes de 09:00 AM a 14:00 PM y de 15:00 PM a 18:00 PM y sábados de 10:00 AM a 14:00 PM.";
    }

    // Variantes de dirección o sucursal
    if (
      lowerCaseMessage.includes("dirección") ||
      lowerCaseMessage.includes("direccion") ||
      lowerCaseMessage.includes("sucursal") ||
      lowerCaseMessage.includes("ubicación") ||
      lowerCaseMessage.includes("dónde están")
    ) {
      let response = "🤖 Aquí están nuestras sucursales:\n";
      sucursales.forEach((sucursal) => {
        response += `📍 ${sucursal.name}: ${sucursal.address}\n`;
      });
      return response;
    }

    // Respuesta predeterminada
    return "🤖 No entendí tu pregunta. Por favor, contáctanos al 📞 +569 6617 8043 .";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput("");
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
          </div>

          {/* Campo de entrada del usuario */}
          <div className="flex w-full max-w-[400px] mt-2 mx-auto p-0">
            <input
              className="flex-1 max-w-[65%] border border-gray-300 p-2 rounded-l-lg focus:outline-none bg-gray-100"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe algo..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-blue-600"
              onClick={handleSend}
            >
              Enviar
            </button>
          </div>
        </motion.div>
      )}

      {/* Botón flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-[90px] w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 -translate-y-1"
        whileTap={{ scale: 0.9 }}
      >
        <IoChatbubbleEllipsesOutline size={28} />
      </motion.button>
    </>
  );
};

export default Chatbot;
