import type { NextPage } from "next";
import { Login } from "../containers/Login";
// import Head from "next/head";
import { useEffect, useState } from "react";
import { Home } from "../containers/Home";
import { getItem } from "../services/sessionCommand";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { HeaderApp } from "../containers/HeaderApp";
// import { Tasks } from "../containers/Tasks";
// import { Footer } from "../containers/Footer";

const Index: NextPage = () => {
  const [accessToken, setAcesstoken] = useState("");

  useEffect(() => {
    if (typeof window! == "undefined") {
      const token: any =  getItem('sessionUser');
      if (token) setAcesstoken(token);
    }
  }, [setAcesstoken]);

  return !accessToken ? <Login setAcesstoken={setAcesstoken} /> : <Home setAcesstoken={setAcesstoken} />;
};

export default Index;
