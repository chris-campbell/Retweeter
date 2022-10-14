import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Retweeter</title>
        <meta
          name="description"
          content="Retweet bot designed to increase brand engagement."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent />
    </div>
  );
};

export default Home;
