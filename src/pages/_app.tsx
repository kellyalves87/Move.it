//arquivo para reaproveitar componentes que serão reutilizados
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
