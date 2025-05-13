'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5,
        },
    }
}

export default function Clients() {
    return (
        <> 

            <section className="clients-section bg-color-2">
                <div className="auto-container">
                    <Swiper {...swiperOptions} className="swiper-container clients-carousel">
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-1.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-2.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-3.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-4.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-5.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-1.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-2.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-3.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-4.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-5.png" alt=""/></Link></figure>
                        </SwiperSlide>
                    </Swiper>
                    </div>
            </section>

        </>
    )
}
