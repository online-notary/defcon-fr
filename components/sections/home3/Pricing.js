'use client'
import React from 'react'
import Link from "next/link"

export default function Pricing() {
    return (
        <> 

            <section className="pricing-style-two sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <div className="icon-box">
                            <i className="icon-police"></i>
                            <div className="shape-box">
                                <div className="shape shape-1"></div>
                                <div className="shape shape-2"></div>
                                <div className="shape shape-3"></div>
                                <div className="shape shape-4"></div>
                            </div>
                        </div>
                        <h2>Professional security services at <br />an affordable price </h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 pricing-block">
                            <div className="pricing-block-two wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="header-inner">
                                        <div className="table-header">
                                            <h4>Unarmed Guard</h4>
                                            <h2><span className="symble">£</span>49<span className="text">/ Month</span></h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/index-3">Start today</Link>
                                        </div>
                                    </div>
                                    <div className="table-content">
                                        <ul className="list clearfix">
                                            <li>Unarmed Guard</li>
                                            <li>Unarmed Mobile Patrol</li>
                                            <li>D Licensed Officer</li>
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
                                            <h4>Armed Guard</h4>
                                            <h2><span className="symble">£</span>79<span className="text">/ Month</span></h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/index-3">Start today</Link>
                                        </div>
                                    </div>
                                    <div className="table-content">
                                        <ul className="list clearfix">
                                            <li>Armed Guard</li>
                                            <li>Aarmed Mobile Patrol</li>
                                            <li>D Licensed Officer</li>
                                            <li>Special application</li>
                                            <li>24/7 Support</li>
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
