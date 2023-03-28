import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";


const Home:NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="grid grid-cols-9">
        {/*Sidebar*/}
        <Sidebar />

        {/*Feed*/}
        <Feed />
        {/*Widgets*/}
        <Widgets />
      </main>
    </div>
  );
}

export default Home;
