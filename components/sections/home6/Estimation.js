'use client'
import React from 'react'
import Link from "next/link"

export default function Estimation() {

    return (
        <> 

            <section className="estimation-section alternat-2">
                <div className="auto-container">
                    <div className="sec-title-three centred">
                        <div className="icon-box"><i className="icon-efficiency"></i></div>
                        <h2>Get your free estimation</h2>
                    </div>
                    <div className="inner-content">
                        <div className="title-box">
                            <ul className="list clearfix">
                                <li>
                                    <div className="icon-box"><i className="icon-calculator"></i></div>
                                    <h5>Free Quote within 24 hours</h5>
                                </li>
                                <li>
                                    <div className="icon-box"><i className="icon-calendar"></i></div>
                                    <h5>Same day service available</h5>
                                </li>
                                <li>
                                    <div className="icon-box"><i className="icon-chat-1"></i></div>
                                    <h5>Friendly advice on 800 123 4567</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="select-box">
                                        <select className="wide">
                                        <option data-display="Camera Type">Camera Type</option>
                                        <option value="1">Bullet Cameras</option>
                                        <option value="2">IP Camera</option>
                                        <option value="3">Dome Cameras</option>
                                        <option value="4">Box Cameras</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="select-box">
                                        <select className="wide">
                                        <option data-display="No.Of Cameras">No.Of Cameras</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="price-box">
                                        <h5>Total: $18500</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="select-box">
                                        <select className="wide">
                                        <option data-display="Hard Disk Size">Hard Disk Size</option>
                                        <option value="1">300 GB</option>
                                        <option value="2">500 GB</option>
                                        <option value="3">1 TB</option>
                                        <option value="4">2 TB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="select-box">
                                        <select className="wide">
                                        <option data-display="Resolution">Resolution</option>
                                        <option value="1">720*1080</option>
                                        <option value="2">1080*1920</option>
                                        <option value="3">4K</option>
                                        <option value="4">8K</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="btn-box">
                                        <Link href="/">Start to Buy</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text centred"><p>To buy CCTV camera just click start to buy button & Submit required details.</p></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
