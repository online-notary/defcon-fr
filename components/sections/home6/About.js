'use client'
import React from 'react'
import Link from "next/link"

export default function About() {
    return (
        <> 

            <section className="about-style-six sec-pad">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/about-10.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_13">
                                <div className="content-box">
                                    <div className="sec-title-three">
                                        <div className="icon-box">
                                            <i className="icon-efficiency"></i>
                                        </div>
                                        <h2>Professional & trustable company in energy management</h2>
                                    </div>
                                    <div className="text">
                                        <p><span>We</span> teachings of the great explorer of the truth the master happiness. No one rejects dislikes or avoids pleasure itself because who do not know how to pursue pleasure.</p>
                                    </div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/award-1.png" alt=""/></figure>
                                        <figure className="year-box"><img src="assets/images/icons/year.png" alt=""/></figure>
                                        <h3>Years of experience</h3>
                                    </div>
                                    <div className="link"><Link href="/about">More about company<i className="fas fa-angle-right"></i></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
