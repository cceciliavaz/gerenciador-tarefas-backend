import type { NextPage } from "next";
import { Login } from "../containers/Login";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { HeaderApp } from "../containers/HeaderApp";
// import { Tasks } from "../containers/Tasks";
// import { Footer } from "../containers/Footer";

const Home: NextPage = () => {
  return (

        <>
          <Login />
          {/* <Tasks/>
          <Footer/> */}
        </>


  );
};

export default Home;
