import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Compromiso from "../secciones/Compromiso";
import Formulario from "../Formulario";
import Proyectos from "../secciones/Proyectos";

const Construccion = () => {
  return (
    <div>
      <Header />
      <Formulario backgroundImage="/images/landing2.webp" />
      <Compromiso />
      <Proyectos />
      <Footer />
    </div>
  );
};
export default Construccion;
