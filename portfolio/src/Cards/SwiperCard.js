import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pic from '../Components/Assets/Ellipse 1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function SwiperCard() {
    return (
        <>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper flex justify-center align-items-center">
                <SwiperSlide className="flex text-center flex-col justify-items-center align-content-center ">
                    <p className="mb-4 w-2/3 self-center text-justify text-xl">
                        "I have always believed, and I still believe, that whatever good or bad fortune may come our way, we can always give it meaning and transform it into something of value."
                    </p>
                    <div className="self-center">
                        <img src = {Pic} alt='Mentor-Pic' className=" w-16" />
                    </div>
                    <h3 className=" font-bold">Shahad Hassan</h3>
                    <p>Developer</p>
                </SwiperSlide>
                <SwiperSlide className="flex text-center flex-col justify-items-center align-content-center ">
                    <p className="mb-4 w-2/3 self-center text-justify text-xl">
                        "I have always believed, and I still believe, that whatever good or bad fortune may come our way, we can always give it meaning and transform it into something of value."
                    </p>
                    <div className="self-center">
                        <img src = {Pic} alt='Mentor-Pic' className=" w-16" />
                    </div>
                    <h3 className=" font-bold">Shahad Chauhan</h3>
                    <p>Developer</p>
                </SwiperSlide>
                <SwiperSlide className="flex text-center flex-col justify-items-center align-content-center ">
                    <p className="mb-4 w-2/3 self-center text-justify text-xl">
                        "I have always believed, and I still believe, that whatever good or bad fortune may come our way, we can always give it meaning and transform it into something of value."
                    </p>
                    <div className="self-center">
                        <img src = {Pic} alt='Mentor-Pic' className=" w-16" />
                    </div>
                    <h3 className=" font-bold">Shahad Gurjar</h3>
                    <p>Developer</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}