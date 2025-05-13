'use client'
import React from 'react'
import Link from "next/link"

export default function Newsletter() {
    return (
        <> 

            <section className="newsletter-section">
                <div className="bg-shape"></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="left-column">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/column-bg.png)" }}></div>
                                <h3>CCTV Kit <br />Supply & Installed</h3>
                                <ul className="icon-box clearfix"> 
                                    <li><i className="icon-day-and-night"></i></li>
                                    <li><i className="icon-rain"></i></li>
                                    <li><i className="icon-home-1"></i></li>
                                </ul>
                                <div className="link"><Link href="/">Start to Buy<i className="fas fa-angle-right"></i></Link></div>
                                <div className="price"><h3><span>$</span>25</h3></div>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="inner-box">
                                <div className="upper-box">
                                    <span>Newsletter</span>
                                    <h2>Subscribe our newsletter</h2>
                                    <p>Be the first to get exclusive offers and the latest news on our product.</p>
                                </div>
                                <div className="form-inner">
                                    <form action="contact.html" method="post" className="newsletter-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Your email address" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <button type="submit">Subscribe now<i className="fas fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <ul className="social-links clearfix">
                                    <li><h5>Stay Connected</h5></li>
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-vimeo-v"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
