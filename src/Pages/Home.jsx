import { useLoaderData } from "react-router-dom";
import EstateCard from "../Components/EstateCard";
import Slider from "../Components/Slider/Slider";
import { Helmet } from "react-helmet";

const Home = () => {
  const estates = useLoaderData();
  // console.log(estates);
  return (
    <div>
      <Helmet>
      <title>HavenlyHomes | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 py-10 w-full">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
