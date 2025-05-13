'use client'
import React from 'react'
import Link from "next/link"

export default function Team() {
    return (
        <> 

            <section className="team-section sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title-two">
                        <p>Meet Our Team</p>
                        <h2>Trusted cyber security team</h2>
                        <Link href="/team" className="link">Meet all members<i className="fas fa-angle-right"></i></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/index-2">David Luponis</Link></h4>
                                        <span className="designation">Founder</span>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/index-2">David Luponis</Link></h4>
                                        <span className="designation">Founder</span>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/index-2">David Luponis</Link></h4>
                                        <span className="designation">Founder</span>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/index-2">David Luponis</Link></h4>
                                        <span className="designation">Founder</span>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/index-2"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
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
