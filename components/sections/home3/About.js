'use client'
import React from 'react'
import Link from "next/link"

export default function About() {
    return (
        <> 

            <section className="about-style-three sec-pad">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <div className="icon-box">
                                            <i className="icon-police"></i>
                                            <div className="shape-box">
                                                <div className="shape shape-1"></div>
                                                <div className="shape shape-2"></div>
                                            </div>
                                        </div>
                                        <h2>Professional security services you can trust</h2>
                                    </div>
                                    <div className="text">
                                        <p>Teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is who do not know how to pursue pleasure.</p>
                                    </div>
                                    <div className="link"><Link href="/about">More about company<i className="fas fa-angle-right"></i></Link></div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/about-1.png" alt=""/></figure>
                                        <ul className="list clearfix">
                                            <li>Committed to the highest standards</li>
                                            <li>We united around one purpose</li>
                                            <li>Everything we do is built on honesty</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_3">
                                <div className="image-box">
                                    <figure className="logo-icon"><img src="assets/images/icons/logo-icon.png" alt=""/></figure>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <figure className="image wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/resource/about-3.jpg" alt=""/></figure>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <figure className="image wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="assets/images/resource/about-4.jpg" alt=""/></figure>
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
