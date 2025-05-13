'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <> 

            <section className="service-style-five sec-pad centred bg-color-6">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/service-bg-3.jpg)" }}></div>
                <div className="auto-container">
                    <div className="sec-title-three centred light">
                        <div className="icon-box"><i className="icon-efficiency"></i></div>
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

        </>
    )
}
