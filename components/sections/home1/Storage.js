'use client'
import React from 'react'
import Link from "next/link"

export default function Storage() {
    return (
        <> 

            <section className="storage-section">
                <div className="title-inner" style={{ backgroundImage: "url(assets/images/background/title-bg.jpg)" }}>
                    <div className="auto-container">
                        <div className="sec-title light centred">
                            <div className="top-title">
                                <div className="shape">
                                    <div className="line line-1"></div>
                                    <div className="line line-2"></div>
                                    <div className="line line-3"></div>
                                    <div className="line line-4"></div>
                                    <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape-2.png)" }}></div>
                                </div>
                                <p>Storage Type</p>
                            </div>
                            <h2>We Proposed Flexible Video Storage <br />and Retrieval</h2>
                        </div>
                    </div>
                </div>
                <div className="outer-container clearfix">
                    <div className="single-column">
                        <div className="single-item">
                            <div className="inner-box">
                                <figure className="light-icon"><img src="assets/images/icons/icon-7.png" alt=""/></figure>
                                <div className="icon-box"><i className="icon-file"></i></div>
                                <h3>Onsite <br /><span>Storage Solutions</span></h3>
                                <p>Frequently occur that pleasures have to be and annoyances accepted always hold.</p>
                                <div className="link"><Link href="/">About Onsite Storage</Link><i className="far fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="image-column">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/resource/storage-1.jpg)" }}></div>
                            <figure className="image-box"><img src="assets/images/resource/storage-1.jpg" alt=""/></figure>
                        </div>
                    </div>
                    <div className="single-column">
                        <div className="single-item">
                            <div className="inner-box">
                                <figure className="light-icon"><img src="assets/images/icons/icon-7.png" alt=""/></figure>
                                <div className="icon-box"><i className="icon-server"></i></div>
                                <h3>Cloud <br /><span>Storage Solutions</span></h3>
                                <p>Frequently occur that pleasures have to be and annoyances accepted always hold.</p>
                                <div className="link"><Link href="/">About Onsite Storage</Link><i className="far fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="image-column">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/resource/storage-2.jpg)" }}></div>
                            <figure className="image-box"><img src="assets/images/resource/storage-2.jpg" alt=""/></figure>
                        </div>
                    </div>
                </div>
                <div className="storage-banner clearfix">
                    <div className="bg-layer-1" style={{ backgroundImage: "url(assets/images/background/column-bg-1.jpg)" }}></div>
                    <div className="bg-layer-2" style={{ backgroundImage: "url(assets/images/background/column-bg-2.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="inner-box clearfix">
                            <div className="single-column">
                                <div className="text">
                                    <h3>Our Product Catalogue</h3>
                                    <p>Security camera catalogue with updated prices here.</p>
                                    <Link href="/"><i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="single-column">
                                <div className="text">
                                    <h3>Industries We Served</h3>
                                    <p>Security camera systems for  wide range of industries.</p>
                                    <Link href="/"><i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
