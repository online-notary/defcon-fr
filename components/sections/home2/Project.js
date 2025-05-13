'use client'
import React from 'react'
import { useState } from "react"
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
            slidesPerView: 5,
        },
    }
}

export default function Project() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <> 

            <section className="project-style-two sec-pad">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/project-bg.jpg)" }}></div>
                <div className="project-tab">
                    <div className="auto-container">
                        <div className="sec-title-two light">
                            <p>Latest Projects</p>
                            <h2>Check our innovation projects</h2>
                            <Link href="project.html" className="link">View All Projects<i className="fas fa-angle-right"></i></Link>
                        </div>
                        <div className="tab-btn-box centred">
                            <ul className="tab-btns product-tab-btns clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "p-tab-btn"}>All Category<span>(14)</span></li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "p-tab-btn"}>Application</li>
                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "p-tab-btn"}>Cloud Security</li>
                                <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "p-tab-btn"}>Network</li>
                                <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "p-tab-btn"}>Infrastructure</li>
                                <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn" : "p-tab-btn"}>Website</li>
                            </ul>
                        </div>
                    </div>
                    <div className="outer-container">
                        <div className="p-tabs-content">
                            <div className={activeIndex === 1 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                            <div className={activeIndex === 2 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                            <div className={activeIndex === 3 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                            <div className={activeIndex === 4 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                            <div className={activeIndex === 5 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                            <div className={activeIndex === 6 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                                    <SwiperSlide>
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-4.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Application</p>
                                                        <h4><Link href="/project-details">Dark Data Discovery</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-5.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Network</p>
                                                        <h4><Link href="/project-details">Security Incident Report</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-6.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Website</p>
                                                        <h4><Link href="/project-details">Container Security</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-7.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Clound Security</p>
                                                        <h4><Link href="/project-details">Application Analysis</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                                                <figure className="image-box"><img src="assets/images/gallery/project-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Infrastructure</p>
                                                        <h4><Link href="/project-details">Business Protection</Link></h4>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
