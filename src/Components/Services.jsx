import PropTypes from 'prop-types';
const Services = ({ service }) => {
  console.log(service);
  const { description, img, title } = service;
  return (
    <div className="max-w-xs p-3 rounded-md shadow-xl">
      <div className="flex justify-center items-center">
        <img src={img} alt="" className="w-28 rounded-md " />
      </div>
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <p className="">{description}</p>
      <div className="flex justify-center items-center">
        <button className="bg-[#00BCD4] my-2 px-3 py-2 text-white rounded-xl ">
          read more
        </button>
      </div>
    </div>
  );
};
Services.propTypes ={
    service:PropTypes.object
}

export default Services;
