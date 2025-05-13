'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Contact_page() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch">
                <section className="contact-page-section sec-pad">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <div className="top-title">
                                <div className="shape">
                                    <div className="line line-1"></div>
                                    <div className="line line-2"></div>
                                    <div className="line line-3"></div>
                                    <div className="line line-4"></div>
                                    <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape.png)" }}></div>
                                </div>
                                <p>Get In Touch</p>
                            </div>
                            <h2>We’re always here for you to <br />give best service</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <form method="post" action="#" id="contact-form" className="default-form"> 
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Name*" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email*" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="phone" required="" placeholder="Phone"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="subject" required="" placeholder="Subject"/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                                <button className="theme-btn style-one" type="submit" name="submit-form">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-column">
                                <div className="sidebar-content" style={{ backgroundImage: "url(assets/images/resource/contact-1.jpg)" }}>
                                    <div className="inner-box centred">
                                        <div className="icon-box"><i className="icon-call-back"></i></div>
                                        <h3>Call Back Request</h3>
                                        <p>Simply leave your contact number, We will call you back.</p>
                                        <Link href="/contact" className="btn-one">Phone Num</Link>
                                        <Link href="/contact" className="theme-btn style-one">Get Call Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-info-section centred">
                    <div className="auto-container">
                        <div className="inner-content clearfix">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-location"></i></div>
                                <h4>Location</h4>
                                <p>Boat House, 152/21 City Road, Hoxton, N1 6NG, UK.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-call"></i></div>
                                <h4>Call Us</h4>
                                <p>Sales: <Link href="tel:5001234567">+500 123 4567</Link><br />Toll Free: <Link href="tel:18000001234">+1800-000-1234</Link></p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-email-1"></i></div>
                                <h4>Mail Us</h4>
                                <p><Link href="mailto:info@example.com">info@example.com</Link><br /><Link href="mailto:supportyou@example.com">supportyou@example.com</Link></p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-clock"></i></div>
                                <h4>Office Hrs</h4>
                                <p>9.00 to 7.00 (Mon_Sat) <br />Sunday Closed</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="google-map-section">
                    <div className="map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={550} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>
            </Layout>
        </div>
    )
}
