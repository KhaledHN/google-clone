import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
      </Head>

      <h1>Let build google with next.js and tailwind</h1>
    </div>
  );
}
