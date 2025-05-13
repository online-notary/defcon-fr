'use client'
import React from 'react'
import Link from "next/link"

export default function Team() {
    return (
        <> 

            <section className="team-style-two sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <div className="icon-box">
                            <i className="icon-police"></i>
                            <div className="shape-box">
                                <div className="shape shape-1"></div>
                                <div className="shape shape-2"></div>
                                <div className="shape shape-3"></div>
                                <div className="shape shape-4"></div>
                            </div>
                        </div>
                        <h2>Security is not just a hobby for <br />our professional team</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Founder</span>
                                        <h4><Link href="/index-3">David Luponis</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Director</span>
                                        <h4><Link href="/index-3">Peshotan Mehta</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                            <div className="team-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="share-option">
                                            <i className="icon-share share-icon"></i>
                                            <ul className="share-links clearfix">
                                                <li><Link href="/index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/index-3"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                        <span className="designation">Hr Manager</span>
                                        <h4><Link href="/index-3">Peter Fransisco</Link></h4>
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
