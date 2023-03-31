import type { GetServerSideProps} from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utlis/fetchTweets";
import {Toaster} from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets}: Props) => {
  console.log(tweets);
  
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        {/*Sidebar*/}
        <Sidebar />

        {/*Feed*/}
        <Feed  tweets={tweets}/>
        {/*Widgets*/}
        <Widgets />
      </main>
    </div>
  );
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }
  }
}
