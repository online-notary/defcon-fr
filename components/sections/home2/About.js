'use client'
import React from 'react'
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"

export default function About() {
    return (
        <> 

            <section className="about-style-two sec-pad" style={{ backgroundImage: "url(assets/images/background/about-bg.jpg)" }}>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_3">
                                <div className="content-box">
                                    <figure className="image-box"><img src="assets/images/resource/about-2.jpg" alt=""/></figure>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p><span>We</span> teachings of the great explorer of the truth the master happiness. No one rejects dislikes or avoids pleasure itself because who do not know how to pursue pleasure.</p>
                                        </div>
                                        <div className="inner clearfix">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-view"></i></div>
                                                <h2>04<span>+</span></h2>
                                                <h5>Years of expereince</h5>
                                            </div>
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-online-shopping"></i></div>
                                                <h2>12.7<span>k</span></h2>
                                                <h5>Customers Worlwide</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_4">
                                <div className="content-box">
                                    <div className="sec-title-two">
                                        <p>About Company</p>
                                        <h2>Specialized in the delivery of world-class cyber security</h2>
                                    </div>
                                    <div className="video-box">
                                        <div className='video-btn'><VideoPopup /></div>
                                        <h5>Watch Our Free Demo</h5>
                                        <Link href="/index-2" className="link">Download<i className="fas fa-angle-right"></i></Link>
                                    </div>
                                    <div className="inner-box">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="single-item wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                    <figure className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></figure>
                                                    <h4><Link href="service.html">Quality Service</Link></h4>
                                                    <p>Idea of denouncing some of pleasure & praising.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="single-item wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                                    <figure className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></figure>
                                                    <h4><Link href="/about">Expert Team</Link></h4>
                                                    <p>Simple & easy to distinguis in free hours all.</p>
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
