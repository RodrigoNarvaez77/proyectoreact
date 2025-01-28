import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Compromiso from "../secciones/Compromiso";
import Formulario from "../Formulario";
import WhatsAppButton from "../WhatsAppButton";
import Proyectos from "../secciones/Proyectos";

const Construccion = () => {
  return (
    <div>
      <Header />
      <Formulario backgroundImage="/images/landing2.webp" />
      <Compromiso />
      <Proyectos />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
export default Construccion;
