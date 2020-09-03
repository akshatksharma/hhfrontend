import { Provider } from "next-auth/client";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  <Provider session={pageProps.session}>
    return <Component {...pageProps} />;
  </Provider>;
}

export default MyApp;
