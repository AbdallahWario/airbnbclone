import Head from "next/head";
import Barner from "../components/Barner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

 const  Home=({ exploreData, liveanywhereData }) =>{
  return (
    <div>
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header />
      <Barner />
      {/* explore nearby section */}
      <main className="max-w-7xl  px-8 mx-auto mt-10 ">
        <section classname="px-10">
          <h2 className="text-2xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-4xl font-semibold">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide -ml-3">
            {liveanywhereData?.map(({ title, img }) => (
              <MediumCard title={title} img={img} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
export default Home

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );
  const liveanywhereData = await fetch("https://jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      liveanywhereData,
    },
  };
}
