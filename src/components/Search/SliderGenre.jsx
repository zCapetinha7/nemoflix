// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper/modules";

const SliderGenre = ({ genres }) => {
    return (
        <div className='text-white'>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                modules={[Autoplay]}
                className='mySwiper'
                autoplay={{ delay: 5000 }}
            >
                {genres?.map((genre) => (
                    <SwiperSlide
                        className='text-sm cursor-pointer border-opacity-30 border border-white rounded-xl h-[30px] flex justify-center items-center'
                        key={genre.id}
                    >
                        {genre.name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderGenre;
