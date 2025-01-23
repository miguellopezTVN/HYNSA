import "/PngItem_755500.png";

export default function Background() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Asegúrate de que nada se desborde
      }}
    >
      <img
        style={{
          zIndex: 1,
          position: "absolute",
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
        src="/fondo-kynsa-web.jpg"
        alt=""
      />
      <h1
        style={{
          zIndex: 2,
          padding: "0 165px",
          position: "absolute",
          top: "40vh",
          width: "100%",
          textAlign: "left",
          color: "#fff",
          margin: 0,
        }}
      >
        ¡Gracias por visitarnos!
      </h1>
      <p
        style={{
          zIndex: 2,
          position: "absolute",
          top: "57vh",
          width: "100%",
          textAlign: "left",
          color: "#fff",
          margin: 0,
          padding: "0 20px",
        }}
      >
        Estamos trabajando para ofrecerte una experiencia increíble. La página
        estará disponible pronto.
      </p>
    </div>
  );
}
