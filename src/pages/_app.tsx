import "@/styles/globals.css";
import { AppProps } from "next/app";
import Layout from "src/components/Layout";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
