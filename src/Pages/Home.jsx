import { useLoaderData } from "react-router-dom";
import EstateCard from "../Components/EstateCard";
import Slider from "../Components/Slider/Slider";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Services from "../Components/Services";
import Review from "../Components/Review";

const Home = () => {
  const estates = useLoaderData();
  // console.log(estates);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>HavenlyHomes | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="pt-20 flex-col flex justify-center items-center space-y-2">
        <h1 className="text-4xl font-semibold">
          Explore Our Estates Collection
        </h1>
        <p className="text-lg text-gray-500">
          Find the epitome of elegance and sophistication among our diverse
          range of estates.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 py-10 w-full">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
      <div className="py-20">
        <div className="flex justify-center items-center flex-col space-y-4 ">
          <h1 className="text-5xl font-semibold text-center">Our Services for You</h1>
          <p className="max-w-2xl text-center text-gray-500">
            Explore a range of professional services designed to streamline your
            real estate transactions. Whether you're buying, selling, or
            renting, our team is dedicated to delivering exceptional results and
            exceeding your expectations.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto gap-2 justify-between items-center pt-10">
          {services.map((service, id) => (
            <Services key={id} service={service}></Services>
          ))}
        </div>
      </div>
      <div className="py-10">
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
