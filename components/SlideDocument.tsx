"use client";

import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Document from "./Document";

const SlideDocument = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mt-10">
                <h2 className="text-2xl! text-main font-semibold">Featured Documents</h2>
                <Button text="View all" className="mt-0!"/>
            </div>
            <div className="mt-5 w-full">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <Link href={"/"} target="_blank" rel="noopener noreferrer">
                            <Document className="h-70 w-full mb-10"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={"/"} target="_blank" rel="noopener noreferrer">
                            <Document className="h-70 w-full mb-10"/>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    )
}

export default SlideDocument;