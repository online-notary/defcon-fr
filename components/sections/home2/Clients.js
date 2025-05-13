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

            <section className="clients-section style-two">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Clients & Partners</p>
                        <h2>We are pleased to work with <br />thousands of partners</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container clients-carousel">
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-6.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-7.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-8.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-9.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-10.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-6.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-7.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-8.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-9.png" alt=""/></Link></figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="clients-logo-box"><Link href="/"><img src="assets/images/clients/clients-logo-10.png" alt=""/></Link></figure>
                        </SwiperSlide>
                    </Swiper>
                    </div>
            </section>

        </>
    )
}
