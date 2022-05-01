import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive App</title>
        <meta name="description" content="Responsive App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>omar</h1>
    </div>
  );
}
