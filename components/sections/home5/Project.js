'use client'
import React from 'react'
import Link from "next/link"

export default function Project() {
    return (
        <> 

            <section className="project-style-three">
                <div className="auto-container">
                    <div className="sec-title-two">
                        <p>Our Works</p>
                        <h2>Check our innovation projects</h2>
                        <Link href="/project" className="theme-btn">View More</Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-9.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-9.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-10.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-10.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-11.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-11.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-12.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-12.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-13.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-13.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 project-block">
                            <div className="project-block-two">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/gallery/project-14.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="text">
                                            <p>Outdoor Wiring</p>
                                            <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                        </div>
                                        <ul className="link-box">
                                            <li><Link href="assets/images/gallery/project-14.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i></Link></li>
                                            <li><Link href="/project-details"><i className="icon-link"></i></Link></li>
                                        </ul>
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
