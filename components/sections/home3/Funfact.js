'use client'
import React from 'react'
import CounterUp from "@/components/elements/CounterUp"

export default function Funfact() {
    return (
        <> 

            <section className="funfact-section">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title">
                                <div className="icon-box">
                                    <i className="icon-police"></i>
                                    <div className="shape-box">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                </div>
                                <h2>Interesting & amazing facts about company</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 counter-column">
                            <div className="counter-content centred">
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-shield-2"></i></div>
                                                <div className="count-outer count-box">
                                                    <span>0</span><span className="count-text"><CounterUp end={4} /></span><span className="symble">+</span>
                                                </div>
                                                <h5>Years of experience</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-police-1"></i></div>
                                                <div className="count-outer count-box">
                                                    <span className="count-text"><CounterUp end={127} /></span>
                                                </div>
                                                <h5>Team members</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-diamond"></i></div>
                                                <div className="count-outer count-box">
                                                    <span>2.</span><span className="count-text"><CounterUp end={8} /></span><span className="symble">k</span>
                                                </div>
                                                <h5>Objects Protected</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 counter-block">
                                        <div className="counter-block-one wow slideInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-building-1"></i></div>
                                                <div className="count-outer count-box">
                                                    <span className="count-text"><CounterUp end={36} /></span>
                                                </div>
                                                <h5>Corporate Offices</h5>
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
