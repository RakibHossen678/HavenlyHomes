import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <div className="pt-2">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide className="slide1  bg-cover bg-center object-cover rounded-2xl">
          <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">

          <h1 className="text-5xl font-semibold">Find Your Dream Home Today!</h1>
          <p className="max-w-xl  ">
            Explore our vast selection of properties and discover the perfect
            place to call home. Whether you're searching for a cozy cottage or a
            luxurious penthouse, we have options to suit every lifestyle and
            budget.
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2 bg-cover bg-center object-cover rounded-2xl">
          <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1 className="text-5xl font-semibold">Discover Your Perfect Property</h1>
            <p className="max-w-xl  ">
              Start your journey to homeownership with us! Browse through our
              diverse range of listings, from urban apartments to rural
              retreats, and find the ideal property that meets your needs and
              exceeds your expectations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3 bg-cover bg-center object-cover rounded-2xl">
          <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1 className="text-5xl font-semibold">Your Home Awaits - Start Exploring!</h1>
            <p className="max-w-xl  ">
              Your dream home is just a click away. Dive into our collection of
              residential properties, meticulously curated to offer comfort,
              style, and convenience. Begin your search today and turn your
              housing dreams into reality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide4 bg-cover bg-center object-cover  rounded-xl">
          <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1 className="text-5xl font-semibold">Discover Your Vacation Paradise</h1>
            <p className="max-w-xl  ">
              Discover the beauty of vacationing in your own paradise. Explore
              our curated selection of vacation homes, each offering a unique
              blend of luxury, comfort, and tranquility. Your perfect vacation
              awaits!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
