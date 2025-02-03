import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"; // Ícono del chat

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "🤖¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // 📌 Función para determinar la respuesta del bot
  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (
      lowerCaseMessage.includes("horario") ||
      lowerCaseMessage.includes("atención")
    ) {
      return "🤖 Nuestro horario de atención es de Lunes a Sábado...";
    }
    if (lowerCaseMessage.includes("hola")) {
      return "🤖 ¡Hola! ¿Cómo puedo ayudarte?";
    }
    return "🤖 No entendí tu pregunta. Contáctanos al 📞 +56 9 1234 5678.";
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
      {/* Contenedor del chatbot (separado del botón flotante) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-5 bg-gray-200 shadow-md p-4 w-80 rounded-lg z-50"
        >
          <div className="h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <input
            className="w-full border p-2 mt-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe algo..."
          />
          <button
            className="bg-blue-500 text-white w-full p-2 mt-2"
            onClick={handleSend}
          >
            Enviar
          </button>
        </motion.div>
      )}

      {/* Botón flotante (independiente del chatbot, no se mueve) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-[84px] w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg z-50"
        whileTap={{ scale: 0.9 }}
      >
        <IoChatbubbleEllipsesOutline size={28} />
      </motion.button>
    </>
  );
};

export default Chatbot;
