'use client'
import React from 'react'
import Link from "next/link"

export default function Highlights() {
    return (
        <> 

            <section className="highlights-section" style={{ backgroundImage: "url(assets/images/background/highlights-bg.jpg)" }}>
                <div className="auto-container">
                    <div className="inner-box centred">
                        <figure className="icon-box"><img src="assets/images/icons/icon-8.png" alt=""/></figure>
                        <h2>View our services in your area</h2>
                        <p>We are Nationwide CCTV Installation Specialists offering CCTV installation for both businesses <br />and homes throughout the US.</p>
                        <div className="check-form">
                            <form action="index.html" method="post">
                                <div className="form-group">
                                    <input type="text" name="post_code" placeholder="Enter Your Postcode" required=""/>
                                    <button type="submit">Check</button>
                                </div>
                            </form>
                        </div>
                        <h5>Scedule for consultation: <Link href="tel:8001234567">800 123 4567</Link></h5>
                    </div>
                </div>
                <div className="highlights-banner">
                    <div className="inner-content clearfix">
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-time-management"></i></div>
                            <p>Monitor</p>
                            <h4>Productivity at Work</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-umbrella"></i></div>
                            <p>Reduce</p>
                            <h4>Your Liability Risks</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-security"></i></div>
                            <p>Improve</p>
                            <h4>Home & Office Safety</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-face-recognition"></i></div>
                            <p>Record</p>
                            <h4>Quality Facial Images</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-shipping"></i></div>
                            <p>Monitor</p>
                            <h4>Your Inventory Level</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-thief"></i></div>
                            <p>Deterring</p>
                            <h4>Criminal Activities</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-fingerprint"></i></div>
                            <p>Detect</p>
                            <h4>Recognise Identify</h4>
                        </div>
                        <div className="single-item">
                            <div className="icon-box"><i className="icon-remote"></i></div>
                            <p>Enabling</p>
                            <h4>Remote Observation</h4>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
