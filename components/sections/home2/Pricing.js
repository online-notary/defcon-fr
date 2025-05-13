'use client'
import React from 'react'
import Link from "next/link"

export default function Pricing() {
    return (
        <> 

            <section className="pricing-style-two sec-pad">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Pricing & Plans</p>
                        <h2>A great product with a great <br />pricing plan</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 pricing-block">
                            <div className="pricing-block-two wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="header-inner">
                                        <div className="table-header">
                                            <h3>Basic Plan</h3>
                                            <h2><span className="symble">£</span>49<span className="text">/ Month</span></h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/index-2">Start today</Link>
                                        </div>
                                    </div>
                                    <div className="table-content">
                                        <ul className="list clearfix">
                                            <li>Continuous monitoring</li>
                                            <li>Remote administration</li>
                                            <li>Configure software</li>
                                            <li>Special application</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pricing-block">
                            <div className="pricing-block-two wow fadeInRight animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="header-inner">
                                        <div className="table-header">
                                            <h3>Prime Plan</h3>
                                            <h2><span className="symble">£</span>79<span className="text">/ Month</span></h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/index-2">Start today</Link>
                                        </div>
                                    </div>
                                    <div className="table-content">
                                        <ul className="list clearfix">
                                            <li>Continuous monitoring</li>
                                            <li>Remote administration</li>
                                            <li>Configure software</li>
                                            <li>Special application</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box centred"><Link href="/index-2" className="theme-btn">Get a Quote</Link></div>
                </div>
            </section>

        </>
    )
}
