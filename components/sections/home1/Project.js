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

    // Pagination
    pagination: {
        el: '.swiper-dots-style-one',
        clickable: true,
    },

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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Project() {
    return (
        <> 

            <section className="project-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <div className="top-title">
                            <div className="shape">
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape.png)" }}></div>
                            </div>
                            <p>Our projects</p>
                        </div>
                        <h2>Check our innovation projects in <br />the past few years</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <SwiperSlide>
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-1.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                        </div>
                                        <ul className="link-box">
                                            <li>
                                                <Link href="assets/images/gallery/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                            </li>
                                            <li>
                                                <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-2.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                        </div>
                                        <ul className="link-box">
                                            <li>
                                                <Link href="assets/images/gallery/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                            </li>
                                            <li>
                                                <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="project-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-3.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                        </div>
                                        <ul className="link-box">
                                            <li>
                                                <Link href="assets/images/gallery/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                            </li>
                                            <li>
                                                <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='swiper-dots-style-one'></div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
