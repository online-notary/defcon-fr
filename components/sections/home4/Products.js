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

    // Navigation
     navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 6,
        },
    }
}

export default function Products() {
    return (
        <> 

            <section className="products-section sec-pad" style={{ backgroundImage: "url(assets/images/background/products-1.jpg)" }}>
                <div className="auto-container">
                    <div className="sec-title-two light">
                        <p>Our Products</p>
                        <h2>Start living in a safer home</h2>
                    </div>
                    <div className='inner-container'>
                        <Swiper {...swiperOptions} className="swiper-container products-carousel">
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-fire-alarm"></i></div>
                                            <h5>Doorbells</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Doorbells</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-door-handle"></i></div>
                                            <h5>Locks</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Locks</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-drawing-tablet"></i></div>
                                            <h5>Tablets</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Tablets</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-clock"></i></div>
                                            <h5>Watches</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Watches</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-speaker"></i></div>
                                            <h5>Speakers</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Speakers</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-security-camera"></i></div>
                                            <h5>Cameras</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Cameras</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-fire-alarm"></i></div>
                                            <h5>Doorbells</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Doorbells</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-door-handle"></i></div>
                                            <h5>Locks</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Locks</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-drawing-tablet"></i></div>
                                            <h5>Tablets</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Tablets</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-clock"></i></div>
                                            <h5>Watches</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Watches</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-speaker"></i></div>
                                            <h5>Speakers</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Speakers</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-security-camera"></i></div>
                                            <h5>Cameras</h5>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                        <div className="overlay-content">
                                            <h5><Link href="/shop-details">Cameras</Link></h5>
                                            <p>To take a trivial example which us ever undertakes.</p>
                                            <div className="link"><Link href="/shop-details"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="slider-nav">
                            <div className="swiper-button-prev">
                                <i className="fas fa-angle-left"></i>
                            </div>
                            <div className="swiper-button-next">
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="more-text centred"><p>Anything and everything for your comfort. <Link href="/index-4">Let’s Get Started</Link></p></div>
                </div>
            </section>

        </>
    )
}
