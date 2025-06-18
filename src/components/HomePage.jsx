import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import Header from "./Header";
import Formulario from "./Formulario";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Compromiso from "./secciones/Compromiso";
import Categorias from "./secciones/Categorias";
import Despacho from "./despacho";
import Promocion from "./secciones/Promocion";
import CategoriaFerreteria from "./CategoriasFerreteria";
import Formadepago from "./Formasdepago";
import Chatbot from "./Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotificationListener from "./NotificationListener";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' https://www.google-analytics.com https://api.emailjs.com https://cotizador-k8g4.onrender.com https://nodejsasistentevirtual-1.onrender.com; img-src 'self' https: data:; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' https:;"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
      </Helmet>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <Header />
        <NotificationListener />
        <Formulario backgroundImage="/images/fotoprincipal.jpg" />
        <Promocion />
        <Compromiso />
        <Despacho />
        <CategoriaFerreteria />
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </div>
  );
};

export default HomePage;
