"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

type VideoItem = {
    id: number;
    title: string;
    thumbnail: string;
};

const videos: VideoItem[] = [
    {
        id: 1,
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        thumbnail: "/img/Chicken wing.png",
    },
    {
        id: 2,
        title: "Vì sao Zane Navratil được bổ nhiệm làm Chủ tịch Ủy ban VDV chuyên nghiệp Pickleball?",
        thumbnail: "/img/Chicken wing.png",
    },
    {
        id: 3,
        title: "Hướng dẫn dink top spin cơ bản cho người mới",
        thumbnail: "/img/Chicken wing.png",
    },
    {
        id: 4,
        title: "5 bài tập di chuyển chân trong Pickleball bạn nên biết",
        thumbnail: "/img/Chicken wing.png",
    },
];

export default function VideoSwiper() {
    return (

        <Swiper className="video-swiper"
            spaceBetween={14}
            slidesPerView={"auto"}

            breakpoints={{
                640: { slidesPerView: 2.1 },
                1024: { slidesPerView: 3.1 },
            }}
        >
            {videos.map((item) => (
                <SwiperSlide key={item.id} className="video-slide">

                    <div className="video-card__thumb">
                        <img
                            src={item.thumbnail}
                            alt={item.title}

                            className="video-card__image"
                        />
                        <div className="video-card__play">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M0.75 9.27333V5.71333C0.75 1.29333 3.88 -0.516667 7.71 1.69333L10.8 3.47333L13.89 5.25333C17.72 7.46333 17.72 11.0833 13.89 13.2933L10.8 15.0733L7.71 16.8533C3.88 19.0633 0.75 17.2533 0.75 12.8333V9.27333Z" fill="white" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <h3 className="video-card__title">{item.title}</h3>

                </SwiperSlide>
            ))}
        </Swiper>

    );
}
