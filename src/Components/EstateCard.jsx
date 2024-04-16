import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EstateCard = ({ estate }) => {
  const {
    image,
    price,
    status,
    facilities,
    estate_title,
    description,
    area,
    location,
    segment_name,
    id,
  } = estate;
  return (
    <div className="indicator">
      <span className="indicator-item badge bg-[#00BCD4] px-4 py-3 mr-5 lg:mr-0 text-white">
        {status}
      </span>
      <div className="card lg:w-96 w-[340px]  bg-base-100 shadow-xl ">
        <figure>
          <img  data-aos="zoom-in"  data-aos-duration="1000" src={image} alt="Shoes" />
        </figure>
        <div className="px-2 py-2">
          <h2 data-aos="fade-right"  data-aos-duration="1000" className="card-title mb-1">{estate_title}</h2>
          <p data-aos="fade-right"  data-aos-duration="1000">{description}</p>
          <div data-aos="fade-right"  data-aos-duration="1000" className="pt-2 flex items-center space-x-2">
            <h1  className="font-medium">Facilities:</h1>
            {facilities.map((facility, idx) => (
              <span key={idx} className="">
                {facility},
              </span>
            ))}
          </div>
          <div data-aos="fade-right"  data-aos-duration="1000" className="">
            <div className="flex justify-between py-2">
              <p>{price}</p>
              <p>{segment_name}</p>
            </div>
            <div data-aos="fade-right"  data-aos-duration="1000" className="flex justify-between py-2">
              <p>{area}</p>
              <p>{location}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up"  data-aos-duration="1000" className="card-actions justify-center">
            <button className=" px-3 py-2 rounded-lg text-white bg-[#00BCD4] my-3 flex ">
              <Link to={`/estate/${id}`}>View Property</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
EstateCard.propTypes ={
    estate:PropTypes.object
}

export default EstateCard;
