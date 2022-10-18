import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  console.log("pageProps:", pageProps);
  return <Component {...pageProps} />;
}
