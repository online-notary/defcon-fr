'use client'
import React from 'react'

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style-two sec-pad centred" style={{ backgroundImage: "url(assets/images/background/testimonial-bg.jpg)" }}>
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Testimonials</p>
                        <h2>What our customers say about <br />our service</h2>
                    </div>
                    <div className="testimonial-inner wow fadeInDown animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">
                                            <div className="icon-box"><i className="icon-left-quote"></i></div>
                                            <h4>Raff Leonard</h4>
                                            <span className="designation">The Craftworks, Founder</span>
                                            <p>Blackcats service team is very prompt, courteous and professional. They are committed to doing a quality job & the service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">
                                            <div className="icon-box"><i className="icon-left-quote"></i></div>
                                            <h4>Lamont Shaun</h4>
                                            <span className="designation">The Humming Tree ,Manager</span>
                                            <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good service.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 testimonial-block">
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">
                                            <div className="icon-box"><i className="icon-left-quote"></i></div>
                                            <h4>Xavier Winston</h4>
                                            <span className="designation">California</span>
                                            <p>I have the pleasure of dealing with blackcats team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-thumb wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-4 col-sm-12 thumb-column">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 thumb-column">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 thumb-column">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
