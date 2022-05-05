import Head from "next/head";
import AboutUs from "../components/about/AboutUs";
import Hero from "../components/hero-section/Hero";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/our-services/Services";
import Skills from "../components/skills-section/Skills";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive App</title>
        <meta name="description" content="Responsive App" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Hero />
      <Skills />
      <AboutUs />
      <Services />
    </div>
  );
}
