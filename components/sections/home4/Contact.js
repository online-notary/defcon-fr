'use client'
import React from 'react'

export default function Contact() {
    return (
        <> 

            <section className="contact-style-two sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                <figure className="image-layer-1 float-bob-y"><img src="assets/images/resource/house-1.png" alt=""/></figure>
                <figure className="image-layer-2"><img src="assets/images/icons/vector-2.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-xl-8 col-lg-12 col-md-12 offset-xl-4 content-column">
                            <div className="content_block_8">
                                <div className="sec-title-two">
                                    <p>Get in Touch</p>
                                    <h2>We’d love to here for you.</h2>
                                </div>
                                <div className="content-box">
                                    <form action="contact.html" method="post" className="default-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" name="name" placeholder="Enter your name" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" name="email" placeholder="Enter email address" required=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input type="text" name="phone" placeholder="Phone num" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <label>Message</label>
                                                    <textarea name="message" placeholder="Write someting ..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
