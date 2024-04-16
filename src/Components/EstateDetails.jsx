import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  // console.log(id);
  // console.log(estates);
  const find = estates.find((estate) => estate.id === id);
  // console.log(find);
  const {
    image,
    price,
    facilities,
    estate_title,
    area,
    location,
    segment_name,
    Long_description
  } = find;

  return (
    <div className="hero my-20 ">
      <Helmet>
      <title>HavenlyHomes | Details</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <img data-aos="zoom-in-down"  data-aos-duration="1000"
          src={image}
          className="lg:max-w-2xl rounded-lg "
        />
        <div>
          <h1 data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="1000" className="text-5xl font-bold">
            {estate_title}
          </h1>
          <p data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="2000" className="py-6">
           {Long_description}
          </p>
          <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="3000" className="pt-2 flex items-center space-x-2">
            <h1 className="font-medium">Facilities:</h1>
            {facilities.map((facility, idx) => (
              <span key={idx} className="">
                {facility},
              </span>
            ))}
          </div>
          <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="3000" className="">
            <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="3000" className="flex justify-between py-2">
              <p>{price}</p>
              <p>{segment_name}</p>
            </div>
            <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="4000" className="flex justify-between py-2">
              <p>{area}</p>
              <p>{location}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
