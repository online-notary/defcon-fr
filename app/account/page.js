'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Account_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="My Account">
                <section className="myaccount-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="login-inner">
                                    <h3>Login</h3>
                                    <form action="/account" method="post" className="login-form">
                                        <div className="form-group">
                                            <i className="fas fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name*" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <i className="far fa-envelope"></i>
                                            <input type="email" name="email" placeholder="Emai Address*" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <i className="fas fa-lock-open"></i>
                                            <input type="password" name="password" placeholder="Enter Password" required=""/>
                                        </div>
                                        <div className="form-group btn-box">
                                            <button type="submit" className="theme-btn style-one">Login</button>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control material-checkbox">
                                                    <input type="checkbox" className="material-control-input"/>
                                                    <span className="material-control-indicator"></span>
                                                    <span className="description">Remember Me</span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <ul className="other-option clearfix">
                                        <li><p>Or login with</p></li>
                                        <li><Link href="/account"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/account"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/account"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="register-inner">
                                    <h3>Register</h3>
                                    <form action="/account" method="post" className="register-form">
                                        <div className="form-group">
                                            <i className="fas fa-user"></i>
                                            <input type="text" name="name" placeholder="Your Name*" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <i className="far fa-envelope"></i>
                                            <input type="email" name="email" placeholder="Emai Address*" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <i className="fas fa-lock-open"></i>
                                            <input type="password" name="password" placeholder="Enter Password" required=""/>
                                        </div>
                                        <div className="form-group btn-box">
                                            <button type="submit" className="theme-btn style-one">Register</button>
                                        </div>
                                    </form>
                                    <div className="text"><p>*You must be a free registered user.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
