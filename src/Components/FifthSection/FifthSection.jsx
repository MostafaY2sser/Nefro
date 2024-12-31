

// import sliderImg from '../../assets/images/FifthSection/sliderImg.png'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // import required modules
// import { EffectCards } from 'swiper/modules';

// const FifthSection = () => {


//     const slider = [
//         { image : sliderImg },
//         { image : sliderImg },
//         { image : sliderImg },
//     ]


//     return (
//         <div className="flex justify-evenly flex-col items-center md:flex-row bg-bgsection px-3 md:px-20 py-5 md:py-10 lg:py-20  rounded-[20px] shadow-lg gap-y-5" id="three">
//             <div className="text flex flex-col gap-3 md:gap-10 items-center md:items-start ">
//                 <h4 className="text-maincolor text-[36px] font-[700] text-center md:text-start">Diet System</h4>
//                 <p className="text-[26px] md:text-[32px] w-[90%] md:w-[60%] font-[500] text-center md:text-start" >Achieve your goals with a personalized diet plan tailored to your needs.</p>
//                 <button className='text-[26px] font-[500] mt-5 md:mt-10 mb-10 md:mb-0 bg-maincolor py-3 w-[200px] rounded-lg text-[white]'>Choose Now</button>
//             </div>
//             {/* <div className="slider">
//                 {slider.map((img , index) => (
//                     <img key={index} src={img.image} alt="" />
//                 ))}
//             </div> */}


//         {/* Swiper :-------- */}
//         <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         {slider.map((img , index) => (
//             <SwiperSlide  key={index}>
//                 <img src={img.image} alt="" />
//             </SwiperSlide>
                    
//                 ))}
//       </Swiper>
//         {/* Swiper :-------- */}


//         </div>
//     )
// }

// export default FifthSection


































import sliderImg from '../../assets/images/FifthSection/sliderImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const FifthSection = () => {
  const slider = [
    { image: sliderImg },
    { image: sliderImg },
    { image: sliderImg },
    { image: sliderImg },
    { image: sliderImg },
  ];

  return (
    <div
      className="flex justify-evenly flex-col items-center md:flex-row bg-bgsection px-3 md:px-20 py-5 md:py-10 lg:py-20 rounded-[20px] shadow-lg gap-y-5 overflow-hidden"
      id="three"
    >
      {/* Section Text */}
      <div className="text flex flex-col gap-3 md:gap-10 items-center md:items-start">
        <h4 className="text-maincolor text-[36px] font-[700] text-center md:text-start">
          Diet System
        </h4>
        <p className="text-[26px] md:text-[32px] w-[90%] md:w-[60%] font-[500] text-center md:text-start">
          Achieve your goals with a personalized diet plan tailored to your needs.
        </p>
        <button className="text-[26px] font-[500] mt-5 md:mt-10 mb-10 md:mb-0 bg-maincolor py-3 w-[200px] rounded-lg text-[white]">
          Choose Now
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[280px] h-[400px]"
      >
        {slider.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={img.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FifthSection;
