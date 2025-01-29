import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Formulario from "./Formulario";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Compromiso from "./secciones/Compromiso";
import Categorias from "./secciones/Categorias";
import Arquitecturayconstruccion from "./ArquitecturayConstruccion";
import Formadepago from "./Formasdepago";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga durante 3 segundos antes de mostrar la página
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta
  }, []);

  // 🔹 Mientras `loading` sea `true`, solo mostramos el Preloader
  if (loading) {
    return <Preloader />;
  }

  // 🔹 Cuando `loading` es `false`, mostramos la página completa
  return (
    <div>
      <Header />
      <Formulario backgroundImage="/images/fotoedificio.png" />
      <Compromiso />
      <Formadepago />
      <Categorias />
      <Arquitecturayconstruccion />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
