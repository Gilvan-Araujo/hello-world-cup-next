import "../styles/globals.css";
import type { AppProps } from "next/app";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
