'use client'
import React from 'react'
import Link from "next/link"

export default function Newsletter() {
    return (
        <> 

            <section className="newsletter-style-two">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 text-column">
                                <div className="text">
                                    <h2>Subcribe our newsletter & get updates</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <form action="/contact" method="post" className="newsletter-form">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Your email address ..." required=""/>
                                            <button type="submit" className="theme-btn">Subscribe now</button>
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
