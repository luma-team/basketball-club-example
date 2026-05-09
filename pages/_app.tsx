import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NYC Basketball Club</title>
        <meta
          name="description"
          content="This is an example site showing how you can use the Luma API."
        />
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
