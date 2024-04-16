import PropTypes from 'prop-types';
const Services = ({ service }) => {
  console.log(service);
  const { description, img, title } = service;
  return (
    <div className="max-w-xs p-3 rounded-md shadow-xl">
      <div className="flex justify-center items-center">
        <img data-aos="zoom-in"  data-aos-duration="1000" src={img} alt="" className="w-28 rounded-md " />
      </div>
      <div className="mt-6 mb-2">
        <h2 data-aos="fade-right"  data-aos-delay="1000"  data-aos-duration="1000" className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <p data-aos="fade-right"  data-aos-delay="1000"  data-aos-duration="2000" className="">{description}</p>
      <div data-aos="zoom-out-up"  data-aos-duration="1000" data-aos-delay="2000"   className="flex justify-center items-center">
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
