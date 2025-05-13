'use client'
import React from 'react'
import Link from "next/link"

export default function Support() {
    return (
        <> 

            <section className="support-section bg-color-1">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/support-bg.png)" }}></div>
                        <div className="image-box">
                                <figure className="image-1"><img src="assets/images/resource/men-1.png" alt=""/></figure>
                                <figure className="image-2"><img src="assets/images/resource/laptop-1.png" alt=""/></figure>
                            </div>
                        <div className="inner">
                            <div className="text">
                                <h3>Need a hand with <br />your security program?</h3>
                                <ul className="list clearfix">
                                    <li>Undertakes laborious physical exercise</li>
                                    <li>Right to find fault with a man</li>
                                    <li>Chooses to enjoy pleasure consequences</li>
                                </ul>
                                <Link href="/index-2"><i className="fas fa-angle-right"></i>Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
