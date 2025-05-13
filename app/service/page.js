'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Service_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Services">
                <section className="service-section sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-1.jpg)" }}>
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-install"></i></div>
                                            <span className="category">cctv</span>
                                            <h3>Install & Configure</h3>
                                            <div className="link"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">01</span>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="icon-box"><i className="icon-install"></i></div>
                                            <span className="category">cctv</span>
                                            <h3><Link href="/service-details">Install & Configure</Link></h3>
                                            <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                            <div className="btn-box"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">01</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-2.jpg)" }}>
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-support"></i></div>
                                            <span className="category">cctv</span>
                                            <h3>Repair & Service</h3>
                                            <div className="link"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">02</span>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="icon-box"><i className="icon-support"></i></div>
                                            <span className="category">cctv</span>
                                            <h3><Link href="/service-details-2">Repair & Service</Link></h3>
                                            <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                            <div className="btn-box"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">02</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-3.jpg)" }}>
                                        <div className="content-box">
                                            <div className="icon-box"><i className="icon-toolbox"></i></div>
                                            <span className="category">cctv</span>
                                            <h3>Maintenance</h3>
                                            <div className="link"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">03</span>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="icon-box"><i className="icon-toolbox"></i></div>
                                            <span className="category">cctv</span>
                                            <h3><Link href="/service-details-3">Maintenance</Link></h3>
                                            <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                            <div className="btn-box"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                            <span className="count">03</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="service-style-five sec-pad centred bg-color-6">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/service-bg-3.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title light">
                            <div className="top-title">
                                <div className="shape">
                                    <div className="line line-1"></div>
                                    <div className="line line-2"></div>
                                    <div className="line line-3"></div>
                                    <div className="line line-4"></div>
                                    <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape-2.png)" }}></div>
                                </div>
                                <p>Special Services</p>
                            </div>
                            <h2>Manage energy usage to retain <br />happiness in future</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-four wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>These cases perfectly simple and easy to distinguish in a free hour our power of choice.</p>
                                            <Link href="/service-details">Read more<i className="fas fa-angle-right"></i></Link>
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-sun-energy-1"></i></div>
                                            <h4>Solar Energy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-four wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>The claims off duty or that all obligations of business it will frequently occur that pleasures.</p>
                                            <Link href="/service-details">Read more<i className="fas fa-angle-right"></i></Link>
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-pinwheel"></i></div>
                                            <h4>Wind Energy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-four wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>The wise man therefore always holds in these matters to this principle of selection rejects.</p>
                                            <Link href="/service-details">Read more<i className="fas fa-angle-right"></i></Link>
                                        </div>
                                        <div className="inner">
                                            <div className="icon-box"><i className="icon-hydro-power"></i></div>
                                            <h4>Hydro Energy</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="service-page-section bg-color-6">
                    <div className="auto-container">
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
            </Layout>
        </div>
    )
}