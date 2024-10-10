import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mb-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-600 mb-2">
            What our customers are saying
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-extrabold text-gray-800 dark:text-gray-100"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="text-base text-gray-500 dark:text-gray-400 mt-2"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi. Sit asperiores modi.
          </p>
        </div>
        {/* Testimonials slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-4">
                <div className="flex flex-col items-center gap-4 shadow-lg py-6 px-6 rounded-lg bg-white dark:bg-gray-900 relative">
                  {/* Image */}
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-24 h-24 object-cover mb-4 shadow-md"
                  />
                  {/* Testimonial Text */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    {data.text}
                  </p>
                  {/* Name */}
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {data.name}
                  </h1>
                  {/* Quote Icon */}
                  <p className="text-gray-300 text-6xl font-serif absolute top-0 right-5">
                    “
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
