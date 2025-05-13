'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Cart_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Shopping Cart">
                <section className="cart-section sec-pad">
                    <div className="auto-container">
                        <div className="cart-title clearfix">
                            <div className="text pull-left">
                                <h6>Your Cart: <span>2 Items</span></h6>
                            </div>
                            <div className="text pull-right">
                                <h6>Total: <span>£168.00</span></h6>
                            </div>
                        </div>
                        <div className="cart-outer">
                            <div className="table-outer">
                                <table className="cart-table">
                                    <thead className="cart-header">
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th className="price">Price</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="prod-column">
                                                <div className="column-box">
                                                    <figure className="prod-thumb"><Link href="/cart"><img src="assets/images/resource/shop/cart-1.jpg" alt=""/></Link></figure>
                                                    <h5>Hand Shovel</h5>
                                                </div>
                                            </td>
                                            <td className="qty"><input type="number" placeholder="1" name="quantity"/></td>
                                            <td className="sub-total">£39.00</td>
                                            <td className="total-price">£78.00</td>
                                            <td><Link href="/cart" className="remove-btn"><span className="icon-close"></span></Link></td>
                                        </tr>
                                        <tr>
                                            <td className="prod-column">
                                                <div className="column-box">
                                                    <figure className="prod-thumb"><Link href="/cart"><img src="assets/images/resource/shop/cart-2.jpg" alt=""/></Link></figure>
                                                    <h5>Flower Pot</h5>
                                                </div>
                                            </td>
                                            <td className="qty"><input type="number" placeholder="1" name="quantity"/></td>
                                            <td className="sub-total">£43.00</td>
                                            <td className="total-price">£90.00</td>
                                            <td><Link href="/cart" className="remove-btn"><span className="icon-close"></span></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 column">
                                    <div className="apply-coupon clearfix">
                                        <div className="form-group clearfix">
                                            <input type="text" name="coupon-code" value="" placeholder="Enter Coupon Code..."/>
                                        </div>
                                        <div className="form-group clearfix">
                                            <button type="button" className="theme-btn style-one">Apply Coupon</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 column clearfix">
                                    <div className="btn-box pull-right clearfix">
                                        <button type="submit" className="cart-btn">Update Cart</button>
                                        <button type="submit" className="theme-btn style-one checkout-btn">Checkout</button>
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
