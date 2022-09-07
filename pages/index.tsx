import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import marco from "../public/marco.png";
import Star from "../public/Star.svg";
import germany from "../public/germany.svg";

const Home: NextPage = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      <Head>
        <title>Follow Alice assessment</title>
        <meta name="description" content="Follow alice test assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:w-3/5 p-4 mt-4 md:mt-12 md:p-12 mx-auto">
        <div className="rounded-4xl max-w-84 h-72 mx-auto shadow-xl bg-white">
          <div className="bg-aliceGrey rounded-4xl flex items-center justify-center rounded-bl-none p-2 px-6 text-white h-5/15">
            <span className="leading-relaxed">
              Follow Alice are the absolute best! I can&apos;t wait to go on
              another adventure! ...
            </span>
          </div>
          <div className="bg-white flex h-4/15 rounded-4xl rounded-tr-none">
            <div className="w-34 mr-1 rounded-4xl rounded-tl-none bg-aliceGrey h-full">
              <Image
                src={marco}
                // width={"100%"}
                // height={"100%"}
                alt="User review"
                className="rounded-4xl"
              />
            </div>
            <div className="p-3">
              <div className="flex items-center py-2">
                {stars.map((star) => (
                  <div key={star} className="mr-1">
                    <Image src={Star} alt="ratings" />
                  </div>
                ))}
              </div>
              <div>
                <p className="flex items-center">Sam M</p>
                <div className="flex items-center">
                  <span className="mr-2">2021</span>{" "}
                  <Image src={germany} width={25} height={25} alt="flag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
