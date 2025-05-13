'use client'
import React from 'react'
import Link from "next/link"

export default function Footer2() {
    return (
        <>

            <footer className="main-footer style-two">
                <div className="footer-top-two">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                    <div className="auto-container">
                        <div className="widget-section">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget logo-widget">
                                        <figure className="footer-logo"><Link href="/index-2"><img src="assets/images/logo-3.png" alt=""/></Link></figure>
                                        <div className="text">
                                            <p>It is a long established fact that a reader will be distract by readable content of a page when looking at its layout the point.</p>
                                        </div>
                                        <div className="support-box">
                                            <i className="icon-dial-pad"></i>
                                            <p>Make a Call</p>
                                            <h5><Link href="tel:15417543010">+1-541-754-3010</Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget contact-widget">
                                        <div className="widget-title">
                                            <h3>Contact us</h3>
                                        </div>
                                        <div className="widget-content clearfix">
                                            <ul className="info clearfix">
                                                <li>
                                                    <i className="icon-placeholder"></i>
                                                    <h5>Location</h5>
                                                    <p>246 Old York Rd, NY 08505</p>
                                                </li>
                                                <li>
                                                    <i className="icon-email-2"></i>
                                                    <h5>Mail us</h5>
                                                    <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                                </li>
                                                <li>
                                                    <i className="icon-hour"></i>
                                                    <h5>Opening hrs</h5>
                                                    <p>9.00 - 7.00(Mon_Sat)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <div className="widget-content clearfix">
                                            <ul className="list">
                                                <li><Link href="/index-2">About Us</Link></li>
                                                <li><Link href="/index-2">Our Services</Link></li>
                                                <li><Link href="/index-2">Projects</Link></li>
                                                <li><Link href="/index-2">Industries</Link></li>
                                                <li><Link href="/index-2">Pricing & Plans</Link></li>
                                            </ul>
                                            <ul className="list">
                                                <li><Link href="/index-2">Leadrship</Link></li>
                                                <li><Link href="/index-2">Certificates</Link></li>
                                                <li><Link href="/index-2">Testimonials</Link></li>
                                                <li><Link href="/index-2">FAQ’s</Link></li>
                                                <li><Link href="/index-2">Partners</Link></li>
                                            </ul>
                                            <ul className="list">
                                                <li><Link href="/index-2">Free Quote</Link></li>
                                                <li><Link href="/index-2">News</Link></li>
                                                <li><Link href="/index-2">Policies</Link></li>
                                                <li><Link href="/index-2">Monitoring</Link></li>
                                                <li><Link href="/index-2">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner clearfix">
                            <div className="copyright pull-left">
                                <p>&copy; {new Date().getFullYear()} <Link href="/index-2">Blackcats</Link>, All Rights Reserved.</p>
                            </div>
                            <ul className="footer-nav pull-right clearfix">
                                <li><Link href="/index-2">Privacy Policy</Link></li>
                                <li><Link href="/index-2">Terms & Conditions</Link></li>
                                <li><Link href="/index-2">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
