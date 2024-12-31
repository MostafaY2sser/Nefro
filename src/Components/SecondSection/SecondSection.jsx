




import slider_2 from "../../assets/images/secondSection/slider_2.png";
import slider_3 from "../../assets/images/secondSection/slider_3.png";
import slider_4 from "../../assets/images/secondSection/slider_4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const SecondSection = () => {
  const sliderImg = [
    { image: slider_2 },
    { image: slider_3 },
    { image: slider_4 },
    { image: slider_2 },
    { image: slider_3 },
  ];

  return (
    <div className="flex items-center flex-col gap-5 mt-10 lg:mt-20" id="two">
      {/* Section Title */}
      <div className="title flex items-center flex-col gap-2">
        <span className="text-maincolor font-[700]">App Screen!</span>
        <h4 className="text-maincolor font-[700] text-[28px] md:text-[34px] lg:text-[40px] text-center">
          Show our App Screenshots!
        </h4>
        <p className="text-textcolor text-center px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
          inventore <br /> omnis aliquid rerum alias molestias.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true} // Ensure the center slide is always active
        slidesPerView={3}
        initialSlide={2} // Set the middle slide as active initially
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }} // Enable pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full"
      >
        {sliderImg.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="img flex-shrink-0 flex items-center justify-center overflow-hidden bg-white rounded-[30px]">
              <img
                src={img.image}
                alt={`Slide ${index}`}
                className="object-cover w-[100%] md:w-[80%] lg:w-[60%]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondSection;
