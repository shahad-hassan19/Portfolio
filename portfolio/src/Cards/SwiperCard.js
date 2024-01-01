import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pic1 from '../Components/Assets/Mentor1.jpg';
import Pic2 from '../Components/Assets/Mentor2.jpg';
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
                        "Working with Shahad was an absolute pleasure. His ability to quickly grasp new concepts and apply them creatively to projects is truly impressive. Not only does he possess strong technical skills, but his collaborative nature and effective communication make him a valuable asset to any team. I have no hesitation in recommending him as a skilled and adaptable frontend developer."
                    </p>
                    <div className="self-center">
                        <img src = {Pic1} alt='Mentor-Pic' className="w-24 rounded-full" />
                    </div>
                    <h3 className=" text-xl font-bold">Shakti Singh</h3>
                    <p>Consulting Specialist - UX/UI</p>
                </SwiperSlide>
                <SwiperSlide className="flex text-center flex-col justify-items-center align-content-center ">
                    <p className="mb-4 w-2/3 self-center text-justify text-xl">
                        "Shahad is not just proficient in coding, he also possesses a strong design sense, which greatly enhances the visual appeal and functionality of his projects. His collaborative approach and strong problem-solving skills make him an excellent addition to any project. His dedication and passion for his craft are admirable, and I am confident he will continue to thrive in his career."
                    </p>
                    <div className="self-center">
                        <img src = {Pic2} alt='Mentor-Pic' className="w-24 rounded-full" />
                    </div>
                    <h3 className="text-xl font-bold">Tanmay Sharma</h3>
                    <p>Saas Sales Professional</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}