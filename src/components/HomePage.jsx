import React from "react";
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
  return (
    <>
      <Preloader />
      <div>
        <Header />
        {/* Aquí pasas el fondo dinámico */}
        <Formulario backgroundImage="/images/fotoedificio.png" />
        <Compromiso />
        <Formadepago />
        <Categorias />
        <Arquitecturayconstruccion />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HomePage;
