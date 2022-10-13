import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import GeometricBackground from "../components/GeometricBackground/GeometricBackground";
import Navigation from "../components/Navigation/Navigation";
import AboutPage from "../components/_AboutPage/AboutPage";
import ContactPage from "../components/_ContactPage/ContactPage";
import HomePage from "../components/_HomePage/HomePage";
import ProjectsPage from "../components/_ProjectsPage/ProjectsPage";
const MarkovskiDev: NextPage = () => {
  return (
    <>
      <Head>
        <title>markovski.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="pages-wrapper">
        {/* <GeometricBackground /> */}
        <Navigation />
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
};

export default MarkovskiDev;
