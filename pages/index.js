import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

import Fade from "react-reveal/Fade";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=" bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl md:mx-auto px-8 sm:px-16 bg-white m-7 md:m-10 rounded-md shadow-md">
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
