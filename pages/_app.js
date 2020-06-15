import App from "next/app";
import Head from "next/head";
import Context from "../store/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Context.Provider>
      <div>
        <Head>
          <title>Task Management</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default MyApp;
