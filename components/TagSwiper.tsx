"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const tags = [
    "#Nhận định kết quả",
    "#Sea Game 33",
    "#Hanoi Open Billards",
    "#PPA Tour",
    "#Vleague",
    "#Premier League",
    "#UEFA Champions League",
    "#Laliga",
];

export default function TagSwiper() {
    return (
        <Swiper
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={8}
            // freeMode={true}  // bỏ dòng này
            freeMode={{
                enabled: true,
                momentumBounce: false, // không nảy vượt biên
            }}
            resistanceRatio={0}       // chặn kéo quá biên
            className="searching-swiper"
        >
            {tags.map((tag) => (
                <SwiperSlide key={tag} className="searching-slide">
                    <a className="card-searching">{tag}</a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
