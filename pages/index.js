import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
import Image from "next/image";

export default function Home({ exploreData, cardsData }) {
  const [loading, setLoading] = useState(false);

  const override = css`
    width: 350px;
    height: 200px;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3400);
    // 3400
  }, []);
  return (
    <div className=" bg-gray-50">
      {loading ? (
        <div className="w-screen g h-screen bg-gray-50 flex justify-center place-items-center flex-col">
          <div className="relative -mb-10 flex flex-col justify-center place-items-center w-[250px] h-[250px]">
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <BarLoader color={"pink"} loading={loading} css={override} />
        </div>
      ) : (
        <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Banner />
          <main className="relative max-w-7xl md:mx-auto px-8 sm:px-16 bg-white m-7 md:m-10 rounded-xl shadow-md">
            <section className="pt-6">
              <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
              <Fade>
                <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {exploreData?.map(({ img, location, distance }) => (
                    <SmallCard
                      key={location}
                      img={img}
                      distance={distance}
                      location={location}
                    />
                  ))}
                </div>
              </Fade>
            </section>
            <section>
              <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
              <Fade duration={3000}>
                <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                  {cardsData?.map(({ img, title }) => (
                    <MediumCard key={img} img={img} title={title} />
                  ))}
                </div>
              </Fade>
            </section>
            <Fade duration={3000}>
              <LargeCard
                img="https://links.papareact.com/4cj"
                title="The Greatest Outdoors"
                description="Wishlists curated by Airbnb."
                buttonText="Get Inspired"
              />
            </Fade>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
