'use client'
import React from 'react'
import Link from "next/link"

export default function Protection() {
    return (
        <> 

            <section className="protection-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                        <div className="sec-title-two light centred">
                            <p>Protection & Monitoring</p>
                            <h2>High quality products and services <br />that we stand behind</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 protection-block">
                                <div className="protection-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/protection-1.jpg)" }}></div>
                                        <div className="icon-box">
                                            <i className="icon-cloud"></i>
                                            <div className="icon-bg" style={{ backgroundImage: "url(assets/images/icons/icons-shap.png)" }}></div>
                                        </div>
                                        <span>Monitoring</span>
                                        <h4>Cloud Security</h4>
                                        <p>Frequently occur that pleasures have to be accepted always.</p>
                                        <div className="link"><Link href="/index-2"><i className="fas fa-angle-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 protection-block">
                                <div className="protection-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/protection-1.jpg)" }}></div>
                                        <div className="icon-box">
                                            <i className="icon-shield1"></i>
                                            <div className="icon-bg" style={{ backgroundImage: "url(assets/images/icons/icons-shap.png)" }}></div>
                                        </div>
                                        <span>Monitoring</span>
                                        <h4>Website Security</h4>
                                        <p>Frequently occur that pleasures have to be accepted always.</p>
                                        <div className="link"><Link href="/index-2"><i className="fas fa-angle-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 protection-block">
                                <div className="protection-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/protection-1.jpg)" }}></div>
                                        <div className="icon-box">
                                            <i className="icon-network"></i>
                                            <div className="icon-bg" style={{ backgroundImage: "url(assets/images/icons/icons-shap.png)" }}></div>
                                        </div>
                                        <span>Monitoring</span>
                                        <h4>Network Security</h4>
                                        <p>Frequently occur that pleasures have to be accepted always.</p>
                                        <div className="link"><Link href="/index-2"><i className="fas fa-angle-right"></i></Link></div>
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
