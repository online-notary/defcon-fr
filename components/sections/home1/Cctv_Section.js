'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Cctv_Section() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <> 

            <section className="cctv-section" style={{ backgroundImage: "url(assets/images/background/cctv-bg.jpg)" }}>
                <div className="tabs-box">
                    <div className="tab-btn-box">
                        <div className="auto-container">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-pharmacy"></i> Commercial CCTV System</li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-building1"></i>Residential CCTV System</li>
                            </ul>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-1.png" alt=""/></figure>
                                            <h5>Bullet Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></figure>
                                            <h5>Dome Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></figure>
                                            <h5>Target Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-4.png" alt=""/></figure>
                                            <h5>Box Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""/></figure>
                                            <h5>Tilt Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-6.png" alt=""/></figure>
                                            <h5>IP Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-1.png" alt=""/></figure>
                                            <h5>Bullet Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></figure>
                                            <h5>Dome Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></figure>
                                            <h5>Target Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-4.png" alt=""/></figure>
                                            <h5>Box Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""/></figure>
                                            <h5>Tilt Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <figure className="icon-box"><img src="assets/images/icons/icon-6.png" alt=""/></figure>
                                            <h5>IP Cameras</h5>
                                            <div className="link"><Link href="/"><i className="icon-down-chevron"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-text centred"><p>Providing Smart security for the smart generation. <Link href="/">Let’s Get Started</Link></p></div>
                    </div>
                </div>
            </section>

        </>
    )
}
