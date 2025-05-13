'use client'
import React from 'react'
import Link from "next/link"

export default function Pricing() {
    return (
        <> 

            <section className="pricing-section home-4 centred sec-pad bg-color-1 before-none">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Pricng & Plans</p>
                        <h2>A great product with a great <br />pricing plan</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="table-header">
                                        <h3>Basic Plan</h3>
                                        <p>Installation With 1 Yr Warranty</p>
                                        <h2><span>$</span>99</h2>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li>1 MP Indoor Camera</li>
                                            <li>Day Vision</li>
                                            <li>One Month Backup</li>
                                            <li>Remote Access</li>
                                            <li className="light">Motion Detection</li>
                                        </ul>
                                    </div>
                                    <div className="table-footer">
                                        <Link href="/index-4" className="theme-btn">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one active wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="table-header">
                                        <h3>Prime Plan</h3>
                                        <p>Installation With 1 Yr Warranty</p>
                                        <h2><span>$</span>129</h2>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li>2 In & Out Door Camera 1 MP</li>
                                            <li>Night Vision</li>
                                            <li>Six Month Backup</li>
                                            <li>Remote Access</li>
                                            <li>Motion Detection</li>
                                        </ul>
                                    </div>
                                    <div className="table-footer">
                                        <Link href="/index-4" className="theme-btn">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="pricing-table">
                                    <div className="table-header">
                                        <h3>Super Plan</h3>
                                        <p>Installation With 2 Yr Warranty</p>
                                        <h2><span>$</span>149</h2>
                                    </div>
                                    <div className="table-content">
                                        <ul className="feature-list clearfix">
                                            <li>2 In & Out Door Camera 2 MP</li>
                                            <li>Night Vision</li>
                                            <li>1 Year Backup</li>
                                            <li>Remote Access</li>
                                            <li>Motion Detection</li>
                                        </ul>
                                    </div>
                                    <div className="table-footer">
                                        <Link href="/index-4" className="theme-btn">Buy Now</Link>
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
