'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"

export default function Chooseus() {
    return (
        <> 

            <section className="chooseus-style-two sec-pad bg-color-1">
                <div className="bg-layer"></div>
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                <figure className="image-layer"><img src="assets/images/resource/worker-1.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div className="video_block_1">
                                <div className="video-inner" style={{ backgroundImage: "url(assets/images/background/video-bg-2.jpg)" }}>
                                    <div className="video-btn">
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-two">
                                        <div className="inner-box mb-30">
                                            <div className="light-icon"><i className="icon-shield"></i></div>
                                            <div className="icon-box"><i className="icon-winner"></i></div>
                                            <h4>#1 company</h4>
                                            <p>To take a trivial example us ever undertakes laborious exercise except.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-two mb-30">
                                        <div className="inner-box">
                                            <div className="light-icon"><i className="icon-shield"></i></div>
                                            <div className="icon-box"><i className="icon-personal-security"></i></div>
                                            <h4>Licensed</h4>
                                            <p>Must explain to you how all this mistaken idea of pain give you complete.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-two">
                                        <div className="inner-box">
                                            <div className="light-icon"><i className="icon-shield"></i></div>
                                            <div className="icon-box"><i className="icon-badge"></i></div>
                                            <h4>Top Notch</h4>
                                            <p>The great explorer of the truth the master-builders off human happiness.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-two">
                                        <div className="inner-box">
                                            <div className="light-icon"><i className="icon-shield"></i></div>
                                            <div className="icon-box"><i className="icon-24-hours1"></i></div>
                                            <h4>24-Hour Service</h4>
                                            <p>Do not know how to pleasure rationally encounter tremely painful.</p>
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
