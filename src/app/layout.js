// import bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Modulos gamificados",
  description: "Desarrollado por Alexandra Acevedo y Saul Lopez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
