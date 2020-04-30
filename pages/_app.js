import "../src/theme/tailwind/index.css";
import AppContext from "../src/app/shared/context/AppContext";
import { useState } from "react";
import Head from "next/head";
import RootApp from "../src/app/root";

function Reactard({ Component, pageProps }) {
  const [_title, _setTitle] = useState("");

  const appContext = {
    title: { title: _title, setTitle: _setTitle },
  };

  return (
    <AppContext.Provider value={appContext}>
      <Head>
        <title>{_title || "Reactard"} | Reactard</title>
      </Head>
      <RootApp>
        <Component {...pageProps} />
      </RootApp>
    </AppContext.Provider>
  );
}

export default Reactard;
