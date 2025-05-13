'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Error_page() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq’s">
                <section className="error-section centred">
                    <div className="auto-container">
                        <div className="error-content">
                            <div className="inner-box">
                                <figure className="image-box"><img src="assets/images/icons/error.png" alt=""/></figure>
                                <h2>Oops! Page Not Found</h2>
                                <p>Sorry we’re unable to find the page you are looking for, please check <br />the url and try again.</p>
                                <Link href="/" className="theme-btn style-one">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
