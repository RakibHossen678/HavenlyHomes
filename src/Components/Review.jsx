import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, seteviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => seteviews(data));
  }, []);
  return (
    <div>
        <div className="flex justify-center items-center flex-col space-y-4 py-10">
          <h1 data-aos="fade-down-right"  data-aos-duration="1000" className="text-5xl font-semibold text-center">Clients Testimonials</h1>
          <p data-aos="fade-down-right"  data-aos-duration="1000" data-aos-delay="1000" className="max-w-2xl text-center text-gray-500">
          Listen to the voices of our satisfied customers as they share their experiences with our agency. Our testimonials offer genuine insights into the quality of service we deliver and the relationships we build.
          </p>
        </div>
      <div className="grid lg:grid-cols-4 gap-10 grid-cols-1 md:grid-cols-2 pb-20">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
