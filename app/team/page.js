'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
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
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

export default function Team_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Meet Our Team">
                <section className="team-style-two team-page">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/John-Catalina.png" alt="John-Catalina" style={{ width: '340px', height: '460px' }}/></figure>
                                        <div className="content-box">
                                            <div className="share-option">
                                                <i className="icon-share share-icon"></i>
                                                <ul className="share-links clearfix">
                                                    <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link href="https://www.linkedin.com/company/defcon-one-security-inc./"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <span className="designation">Founder</span>
                                            <h4><Link href="/index-6">John Catalina</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
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
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
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
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-11.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="share-option">
                                                <i className="icon-share share-icon"></i>
                                                <ul className="share-links clearfix">
                                                    <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <span className="designation">Designer</span>
                                            <h4><Link href="/index-6">Hendry James</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-12.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="share-option">
                                                <i className="icon-share share-icon"></i>
                                                <ul className="share-links clearfix">
                                                    <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <span className="designation">Marketing Head</span>
                                            <h4><Link href="/index-6">Mason Archie</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                <div className="team-block-two">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/team/team-13.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="share-option">
                                                <i className="icon-share share-icon"></i>
                                                <ul className="share-links clearfix">
                                                    <li><Link href="/index-6"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link href="/index-6"><i className="fab fa-linkedin-in"></i></Link></li>
                                                </ul>
                                            </div>
                                            <span className="designation">Team Leader</span>
                                            <h4><Link href="/index-6">Jake Reuben</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="team-section team-page sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                    <div className="auto-container">
                        <Swiper {...swiperOptions} className="swiper-container four-item-carousel">
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4><Link href="/index-2">David Luponis</Link></h4>
                                            <span className="designation">Founder</span>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className='swiper-dots-style-one'></div>
                        </Swiper>
                    </div>
                </section>
            </Layout>
        </div>
    )
}