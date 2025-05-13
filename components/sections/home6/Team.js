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

export default function Team() {
    return (
        <> 

            <section className="team-style-two alternat-2 sec-pad">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/team-bg.jpg)" }}></div>
                <div className="auto-container">
                    <div className="sec-title-three centred light">
                        <div className="icon-box"><i className="icon-efficiency"></i></div>
                        <h2>Meet our professional team</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-8.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Founder</span>
                                        <h4><Link href="/index-6">David Luponis</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-9.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Director</span>
                                        <h4><Link href="/index-6">Peshotan Mehta</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-10.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Hr Manager</span>
                                        <h4><Link href="/index-6">Peter Fransisco</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-8.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Founder</span>
                                        <h4><Link href="/index-6">David Luponis</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-9.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Director</span>
                                        <h4><Link href="/index-6">Peshotan Mehta</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-10.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Hr Manager</span>
                                        <h4><Link href="/index-6">Peter Fransisco</Link></h4>
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
