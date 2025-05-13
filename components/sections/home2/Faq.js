'use client'
import React from 'react'
import { useState } from "react"

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <> 

            <section className="faq-section sec-pad bg-color-1">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/faq-bg.jpg)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_5">
                                <div className="content-box">
                                    <h3>Get Free Estimation</h3>
                                    <form action="/faq" method="post" className="quote-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <input type="text" name="fname" placeholder="First name" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="form-group">
                                                    <input type="text" name="lname" placeholder="Last name" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Service you need">Service you need</option>
                                                        <option value="1">Bullet Cameras</option>
                                                        <option value="2">IP Camera</option>
                                                        <option value="3">Dome Cameras</option>
                                                        <option value="4">Box Cameras</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Message..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 column">
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn">Get a Quote</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title-two">
                                        <p>Customers Faq’s</p>
                                        <h2>Get answers for frequently asked questions</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>01. What Gap analysis do you provide?</h5>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>02. What is the maturity model?</h5>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>03. How can we build a safer cyberworld?</h5>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>04. How much do blackcats services cost?</h5>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
