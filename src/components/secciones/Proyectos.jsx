import React from "react";
import { motion } from "framer-motion";

const Proyectos = () => {
  const projects = [
    {
      src: "./images/interior 1.png",
      alt: "Interior terminado con acabados modernos",
    },
    { src: "./images/interior 2.png", alt: "Sala de estar moderna" },
    {
      src: "./images/interior 3.png",
      alt: "Diseño de interiores contemporáneo",
    },
    { src: "./images/tienda 1.png", alt: "Vista exterior de tienda" },
    { src: "./images/tienda 2.png", alt: "Fachada de una tienda comercial" },
    { src: "./images/tienda 3.png", alt: "Proyecto comercial moderno" },
    { src: "./images/cc7.png", alt: "Proyecto comercial moderno" },
    { src: "./images/cc5.png", alt: "Proyecto comercial moderno" },
    { src: "./images/cc6.png", alt: "Proyecto comercial moderno" },
    { src: "./images/cc1.png", alt: "Proyecto comercial moderno" },
    { src: "./images/cc2.png", alt: "Proyecto comercial moderno" },
  ];

  return (
    <section className="bg-light text-center py-5">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          id="proyectos"
          className="text-2xl font-bold mb-8 custom-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Proyectos
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="img-fluid project-img mx-auto rounded shadow-md"
              />
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-lg mt-4 font-medium custom-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Diseñamos y construimos a tu medida.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Proyectos;
