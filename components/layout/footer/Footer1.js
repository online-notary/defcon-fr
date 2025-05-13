'use client'
import React from 'react'
import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="main-footer">
                <div className="footer-top">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/footer-bg.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="widget-section">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget logo-widget">
                                        <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt=""/></Link></figure>
                                        <div className="support-box">
                                            <h4><Link href="tel:8001234567">800-123-4567</Link></h4>
                                            <p>Call for free consultation!</p>
                                        </div>
                                        <div className="text">
                                            <p>Right to find fault with a man who chooses too enjoy a pleasures that annoying consequences.</p>
                                            <Link href="/">Read more<i className="fas fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <div className="widget-content clearfix">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/">About Company</Link></li>
                                                <li><Link href="/">Leadership</Link></li>
                                                <li><Link href="/">Blog Post</Link></li>
                                                <li><Link href="/">FAQ’s</Link></li>
                                                <li><Link href="/">Certification</Link></li>
                                                <li><Link href="/">Testimonials</Link></li>
                                            </ul>
                                            <ul className="links-list clearfix pl-25">
                                                <li><Link href="/">Services</Link></li>
                                                <li><Link href="/">Industries</Link></li>
                                                <li><Link href="/">Feedback</Link></li>
                                                <li><Link href="/">Partners</Link></li>
                                                <li><Link href="/">Pricing</Link></li>
                                                <li><Link href="/">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget post-widget">
                                        <div className="widget-title">
                                            <h3>Recent Post</h3>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb">
                                                    <img src="assets/images/resource/footer-post-1.jpg" alt=""/>
                                                    <Link href="/blog-details">+</Link>
                                                </figure>
                                                <h5><Link href="/blog-details">5 Ways CCTV Can Improve Security of Your House</Link></h5>
                                                <span className="post-date">14th Sept, 2020</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb">
                                                    <img src="assets/images/resource/footer-post-2.jpg" alt=""/>
                                                    <Link href="/blog-details">+</Link>
                                                </figure>
                                                <h5><Link href="/blog-details">Reasons Why it is Important to install CCTV</Link></h5>
                                                <span className="post-date">05th Sept, 2020</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-info">
                            <ul className="info-list clearfix">
                                <li>
                                    <i className="icon-location"></i>
                                    <h6>Location</h6>
                                    <p>246 Old York Rd, NY 08505</p>
                                </li>
                                <li>
                                    <i className="icon-email-1"></i>
                                    <h6>Mail us</h6>
                                    <p><Link href="mailto:support@example.com">support@example.com</Link></p>
                                </li>
                                <li>
                                    <i className="icon-clock"></i>
                                    <h6>Office hrs</h6>
                                    <p>9.00am to 7.00pm (Mon_Sat)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner clearfix">
                            <div className="copyright pull-left">
                                <p>&copy; {new Date().getFullYear()} <Link href="/">Blackcats</Link>, All Rights Reserved.</p>
                            </div>
                            <ul className="footer-nav pull-right clearfix">
                                <li><Link href="/">Privacy Policy</Link></li>
                                <li><Link href="/">Terms & Conditions</Link></li>
                                <li><Link href="/">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
