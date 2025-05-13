'use client'
import React from 'react'
import { useState } from "react"

export default function Energy() {
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

            <section className="energy-saving-section bg-color-6">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_14">
                                <div className="content-box">
                                    <div className="sec-title-three">
                                        <div className="icon-box"><i className="icon-efficiency"></i></div>
                                        <h2>Manage energy usage to retain happiness</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"><i className="icon-hot"></i></div>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h4>Heating</h4>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                                <div className="progress-box">
                                                    <span className="rating">82%</span>
                                                    <span className="progress-bar"></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"><i className="icon-cold"></i></div>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h4>Cooling</h4>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                                <div className="progress-box">
                                                    <span className="rating">82%</span>
                                                    <span className="progress-bar"></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"><i className="icon-electricity"></i></div>
                                                <div className="icon-outer"><i className="icon-down-chevron"></i></div>
                                                <h4>Lighting</h4>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <p>The master-builder of human happiness. No one rejects, dislikes, those who do not know how to pursue pleasure.</p>
                                                <div className="progress-box">
                                                    <span className="rating">82%</span>
                                                    <span className="progress-bar"></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/watch-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
