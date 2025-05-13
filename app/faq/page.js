'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"

export default function Faq_page() {
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
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq’s">
                <section className="faq-page-section sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="faq-content">
                                    <div className="sec-title">
                                        <div className="top-title">
                                            <div className="shape">
                                                <div className="line line-1"></div>
                                                <div className="line line-2"></div>
                                                <div className="line line-3"></div>
                                                <div className="line line-4"></div>
                                                <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape.png)" }}></div>
                                            </div>
                                            <p>Customer Faq’s</p>
                                        </div>
                                        <h2>Answers for general questions</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>01. What do I need for a complete CCTV system?</h5>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block active-block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>02. What are the benefits of IP CCTV?</h5>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>03. What is a DVR?</h5>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>04. Can i connect to my computer?</h5>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>05. Calculating which camera to use</h5>
                                            </div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h5>06. Are your cameras wired or wireless?</h5>
                                            </div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but because those who do not know how to pursue pleasure.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="faq-sidebar ml-30">
                                    <div className="form-inner">
                                        <h3>Ask your questions</h3>
                                        <form action="faq.html" method="post">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Your Name" required=""/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" required=""/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone" required=""/>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Questions here..."></textarea>
                                            </div>
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn style-one">Submit Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
