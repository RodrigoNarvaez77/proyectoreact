import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Compromiso from "./components/secciones/Compromiso";
import Categorias from "./components/secciones/Categorias";
import Arquitecturayconstruccion from "./components/ArquitecturayConstruccion";
import Formadepago from "./components/Formasdepago";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Preloader />
      <div>
        <Header />
        <Formulario />
        <Compromiso />
        <Formadepago />
        <Categorias />
        <Arquitecturayconstruccion />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
