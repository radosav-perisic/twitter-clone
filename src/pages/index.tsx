import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "../../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main>
        {/*Sidebar*/}
        <Sidebar />

        {/*Feed*/}

        {/*Widgets*/}
      </main>{" "}
    </>
  );
}
