//arquivo para reaproveitar componentes que serão reutilizados
import { useState } from "react";

import "../styles/global.css";

//Context fica em volta do app pois o mesmo tem acesso a todos os componentes que irão se encaixar dentro do contexto
import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
