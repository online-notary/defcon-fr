'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"

export default function Checkout_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Checkout">
                <section className="checkout-section sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="contact-information">
                                    <h3>Contact Information</h3>
                                    <div className="contact-inner">
                                        <div className="form-group">
                                            <input type="text" name="phone" placeholder="Phone Number" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email Address" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control material-checkbox">
                                                    <input type="checkbox" className="material-control-input"/>
                                                    <span className="material-control-indicator"></span>
                                                    <span className="description">Get Product Updates & Offers</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shipping-address">
                                    <h3>Shipping Address</h3>
                                    <div className="shipping-inner">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="fname" placeholder="First Name" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="lname" placeholder="Last Name" required=""/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="address" placeholder="Address" required=""/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="city" placeholder="City" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <div className="select-box">
                                                    <select className="wide">
                                                    <option data-display="Select">Select</option>
                                                    <option value="1">U.S.A</option>
                                                    <option value="2">U.K</option>
                                                    <option value="3">Canada</option>
                                                    <option value="4">Spain</option>
                                                    <option value="5">Maxico</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="password" name="pincode" placeholder="Pincode" required=""/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input type="checkbox" className="material-control-input"/>
                                                        <span className="material-control-indicator"></span>
                                                        <span className="description">Save for future shopping</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="product-information">
                                    <div className="single-item clearfix">
                                        <figure className="product-image"><img src="assets/images/resource/shop/post-4.jpg" alt=""/></figure>
                                        <h5>Smart Office Camera</h5>
                                        <span>£45.00</span>
                                    </div>
                                    <div className="sub-total clearfix">
                                        <h5>Sub&nbsp;total</h5>
                                        <i className="line"></i>
                                        <span>£90.00</span>
                                    </div>
                                    <div className="shipping clearfix">
                                        <h5>Shipping</h5>
                                        <i className="line"></i>
                                        <span>£10.00</span>
                                    </div>
                                    <div className="total">
                                        <h5>Total</h5>
                                        <span>£100.00</span>
                                    </div>
                                    <div className="btn-box">
                                        <button type="submit" className="theme-btn style-one">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-option">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="payment-method">
                                        <h3>Choose a Payment Method</h3>
                                        <ul className="clearfix">
                                            <li>
                                                <div className="form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input"/>
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">Direct Bank Trasfer</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input"/>
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">Credit Card / Debit Card</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <p>It is a long established fact that a reader will distracted of a page when looking at its layout. </p>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input"/>
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">Cheque Payment</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input"/>
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">Paypal</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-group">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control material-checkbox">
                                                            <input type="checkbox" className="material-control-input"/>
                                                            <span className="material-control-indicator"></span>
                                                            <span className="description">Google Pay</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="card-details">
                                        <h3>Card Details</h3>
                                        <div className="details-inner">
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="card_name" placeholder="Name on the Card" required=""/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="card_no" placeholder="Card Number" required=""/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="date" id="datepicker" placeholder="Expiry Date" required=""/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="password" name="code" placeholder="Security Code" required=""/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <button type="submit" className="theme-btn style-one">Make Payment</button>
                                                </div>
                                            </div>
                                        </div>
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
