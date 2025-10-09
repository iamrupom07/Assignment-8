import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppCard from "../common/AppCard";
import LoadingSpinner from "../common/LoadingSpinner";
import MobileImage from "../../photo/hero.png";

const HomePage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/appData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <section className="text-center pt-20 px-4 bg-white">
        <h1 class="text-7xl font-bold text-center">
          We Build <br />
          <span class="bg-gradient-to-r from-[#7B3FFF] to-[#A365FF] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p class="text-gray-600  text-center my-5">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="my-8 flex justify-center gap-4">
          <a
            href="https://play.google.com/store/games"
            className="border-2 border-gray-400 px-6 py-3 rounded-lg font-semibold flex gap-2"
          >
            <img
              src="https://i.ibb.co.com/9HqwK8Df/1664285914google-play-logo-png.png"
              alt=""
              width={"20px"}
            />
            Google Play
          </a>
          <a
            href="https://play.google.com/store/games"
            className="border-2 border-gray-400 px-6 py-3 rounded-lg font-semibold flex gap-2"
          >
            <img
              src="https://i.ibb.co.com/tTy8R4PN/png-transparent-app-store-iphone-apple-app-store-icon-blue-text-mobile-phones-removebg-preview.png"
              alt=""
              width={"25px"}
            />
            Apple Store
          </a>
        </div>
        <div className="flex justify-center">
          <img src={MobileImage} alt="" />
        </div>
      </section>

      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold">29.6M</p>
              <p className="text-purple-200">Total Downloads</p>
            </div>
            <div>
              <p className="text-5xl font-bold">906K</p>
              <p className="text-purple-200">Total Reviews</p>
            </div>
            <div>
              <p className="text-5xl font-bold">132+</p>
              <p className="text-purple-200">Active Apps</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-gray-600 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/apps"
            className="bg-gradient-to-r from-[#7B3FFF] to-[#A365FF] text-white font-bold py-3 px-8 rounded-lg "
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
