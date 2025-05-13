'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
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

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

export default function About_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Company">
                <section className="about-style-seven sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_15">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <div className="top-title">
                                                <div className="shape">
                                                    <div className="line line-1"></div>
                                                    <div className="line line-2"></div>
                                                    <div className="line line-3"></div>
                                                    <div className="line line-4"></div>
                                                    <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape-5.png)" }}></div>
                                                </div>
                                                <p>About Company</p>
                                            </div>
                                            <h2>We are nationwide CCTV service specialists</h2>
                                        </div>
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/award-1.png" alt=""/></figure>
                                            <figure className="year-box"><img src="assets/images/icons/year-2.png" alt=""/></figure>
                                            <h3>Years of experience</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_16">
                                    <div className="content-box">
                                        <div className="text">
                                            <p><span>We</span> teachings of the great explorer of the truth the master some of happiness. No one rejects dislikes or avoids pleasure we get itself because who do not know how to pursue pleasure.</p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-pharmacy"></i></div>
                                                <span>Blackcats in</span>
                                                <h4>Commercial area</h4>
                                                <p>Complete account of the system, and expound the actual.</p>
                                            </div>
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-building1"></i></div>
                                                <span>Blackcats in</span>
                                                <h4>Residential area</h4>
                                                <p>Nor again is there anyone loves or pursues or desires too.</p>
                                            </div>
                                        </div>
                                        <div className="author-box">
                                            <figure className="image-box"><img src="assets/images/resource/author-3.jpg" alt=""/></figure>
                                            <figure className="signature"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                                            <h5>Roman Liam,<span> Ceo & Founder</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="video-section">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="video-inner" style={{ backgroundImage: "url(assets/images/background/video-1.jpg)" }}>
                                <div className="video-btn">
                                    <VideoPopup />
                                    <i className="fas fa-play"></i>
                                    <span className="border-animation border-1"></span>
                                    <span className="border-animation border-2"></span>
                                    <span className="border-animation border-3"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="chooseus-style-three" style={{ backgroundImage: "url(assets/images/background/chooseus-bg.jpg)" }}>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-two">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-winner"></i></div>
                                        <h4>#1 company</h4>
                                        <p>To take a trivial example us ever undertakes laborious exercise except.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-two">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-personal-security"></i></div>
                                        <h4>Licensed</h4>
                                        <p>Must explain to you how all this mistaken idea of pain give you complete.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-two">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-badge"></i></div>
                                        <h4>Top Notch</h4>
                                        <p>The great explorer of the truth the master-builders off human happiness.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-two">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-24-hours1"></i></div>
                                        <h4>24-Hour Service</h4>
                                        <p>Do not know how to pleasure rationally encounter tremely painful.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="history-section sec-pad">
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
                                <p>Our History</p>
                            </div>
                            <h2>Discover the story of blackcats</h2>
                        </div>
                        <Swiper {...swiperOptions} className="swiper-container history-carousel">
                            <SwiperSlide>
                                <div className="history-block">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/history-1.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="upper">
                                                <span>1990’s</span>
                                                <h3>Company established at newyork</h3>
                                            </div>
                                            <div className="text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded.</p>
                                            </div>
                                            <ul className="list clearfix">
                                                <li>Prevents our being able to do what we like best.</li>
                                                <li>Every pleasure is to welcomed avoided.</li>
                                                <li>Claims of duty or the obligations of business frequently.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="history-block">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/history-1.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="upper">
                                                <span>2000’s</span>
                                                <h3>Company established at newyork</h3>
                                            </div>
                                            <div className="text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded.</p>
                                            </div>
                                            <ul className="list clearfix">
                                                <li>Prevents our being able to do what we like best.</li>
                                                <li>Every pleasure is to welcomed avoided.</li>
                                                <li>Claims of duty or the obligations of business frequently.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="history-block">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/history-1.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="upper">
                                                <span>2008’s</span>
                                                <h3>Company established at newyork</h3>
                                            </div>
                                            <div className="text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded.</p>
                                            </div>
                                            <ul className="list clearfix">
                                                <li>Prevents our being able to do what we like best.</li>
                                                <li>Every pleasure is to welcomed avoided.</li>
                                                <li>Claims of duty or the obligations of business frequently.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="slider-nav">
                                <div className="swiper-button-prev">
                                    <i className="fas fa-angle-left"></i>
                                </div>
                                <div className="swiper-button-next">
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>
                
                <section className="funfact-section style-two sec-pad" style={{ backgroundImage: "url(assets/images/background/funfact-bg-2.jpg)" }}>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title light">
                                    <div className="top-title">
                                        <div className="shape">
                                            <div className="line line-1"></div>
                                            <div className="line line-2"></div>
                                            <div className="line line-3"></div>
                                            <div className="line line-4"></div>
                                            <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape-2.png)" }}></div>
                                        </div>
                                        <p>Company Facts</p>
                                    </div>
                                    <h2>Interesting & amazing facts</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 counter-column">
                                <div className="counter-content centred">
                                    <div className="row clearfix">
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-shield-2"></i></div>
                                                    <div className="count-outer count-box">
                                                        <span>0</span><span className="count-text"><CounterUp end={4} /></span><span className="symble">+</span>
                                                    </div>
                                                    <h5>Years of experience</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-police-1"></i></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text"><CounterUp end={127} /></span>
                                                    </div>
                                                    <h5>Team members</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-diamond"></i></div>
                                                    <div className="count-outer count-box">
                                                        <span/>2.<span className="count-text"><CounterUp end={8} /></span><span className="symble">k</span>
                                                    </div>
                                                    <h5>Objects Protected</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                            <div className="counter-block-one wow slideInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div className="inner-box">
                                                    <div className="icon-box"><i className="icon-building-1"></i></div>
                                                    <div className="count-outer count-box">
                                                        <span className="count-text"><CounterUp end={36} /></span>
                                                    </div>
                                                    <h5>Corporate Offices</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="team-style-two alternat-2 sec-pad">
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
                                <p>Team Memmbers</p>
                            </div>
                            <h2>Meet our professional team</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
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
                        </div>
                        <div className="more-text centred"><Link href="/team">Meet all members<i className="fas fa-angle-right"></i></Link></div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}