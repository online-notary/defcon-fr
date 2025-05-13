'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Project() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <> 

            <section className="project-style-two alternat-2 sec-pad">
                <div className="bg-color"></div>
                <div className="project-tab">
                    <div className="auto-container">
                        <div className="sec-title-three">
                            <div className="icon-box"><i className="icon-efficiency"></i></div>
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
                        <div className="p-tabs-content">
                            <div className={activeIndex === 1 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 6 ? "p-tab active-tab" : "p-tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-15.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-16.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-16.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-17.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-17.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-18.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-18.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-19.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-19.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-20.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-20.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-21.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-21.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                                        <div className="project-block-one">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/gallery/project-22.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <div className="text">
                                                        <p>Outdoor Wiring</p>
                                                        <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                                    </div>
                                                    <ul className="link-box">
                                                        <li>
                                                            <Link href="assets/images/gallery/project-22.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
