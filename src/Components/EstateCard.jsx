import { Link } from "react-router-dom";

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
    id
  } = estate;
  return (
    <div className="indicator">
      <span className="indicator-item badge bg-[#00BCD4] px-4 py-3 text-white">{status}</span>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="px-3 py-2">
          <h2 className="card-title mb-1">{estate_title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className=" px-3 py-2 rounded-lg text-white bg-[#00BCD4] my-3"><Link to={`/estate/${id}`}>View Property</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
