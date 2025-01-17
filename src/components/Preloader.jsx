import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga (puedes personalizar el tiempo en ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 segundos de preloader

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  if (!loading) {
    return null; // Si no está cargando, no muestra nada
  }

  return (
    <div id="preloader" style={styles.preloader}>
      <img
        id="logo"
        src="/images/logo ferretería blanco.png" // Cambia esta ruta según tu logo
        alt="Logo Ferretería"
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  preloader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  logo: {
    width: "150px",
    height: "auto",
  },
};

export default Preloader;
