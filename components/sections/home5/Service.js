'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <> 

            <section className="service-style-four sec-pad">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>What We Do</p>
                        <h2>High quality products and services <br />that we stand behind</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-4.jpg" alt=""/></figure>
                                        <div className="icon-box"><i className="icon-consultation"></i></div>
                                        <div className="link"><Link href="/service-details"><i className="icon-right-arrow"></i></Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/service-details">Security Consulting</Link></h4>
                                        <p>To take a trivial example which us ever undertakes laborious physical.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-5.jpg" alt=""/></figure>
                                        <div className="icon-box"><i className="icon-personal-security"></i></div>
                                        <div className="link"><Link href="/service-details"><i className="icon-right-arrow"></i></Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/service-details">Personal Protection</Link></h4>
                                        <p>Frequently occur that all pleasures have to be accepted always.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-6.jpg" alt=""/></figure>
                                        <div className="icon-box"><i className="icon-protection"></i></div>
                                        <div className="link"><Link href="/service-details"><i className="icon-right-arrow"></i></Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/service-details">Commercial Security</Link></h4>
                                        <p>To take a trivial example which us ever undertakes laborious physical.</p>
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
