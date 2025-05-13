'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import PriceRangeSlider from "@/components/elements/PriceRangeSlider"
import "app/favicon.ico"
import Link from "next/link"

export default function Shop_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Products">
                <section className="shop-page-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                                <div className="shop-sidebar">
                                    <div className="sidebar-search">
                                        <form action="/shop" method="post" className="search-form">
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="Search..." required=""/>
                                                <button><i className="icon-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/shop-details">Accessories</Link></li>
                                                <li><Link href="/shop-details">Bullet Cameras [18]</Link></li>
                                                <li><Link href="/shop-details">Dome Cameras</Link></li>
                                                <li><Link href="/shop-details">Hard Disks</Link></li>
                                                <li><Link href="/shop-details">Simulated Cameras</Link></li>
                                                <li><Link href="/shop-details">Spy Cameras</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget price-filters">
                                        <div className="widget-title">
                                            <h4>Filter by Price</h4>
                                        </div>
                                        <div className="range-slider clearfix">
                                            <PriceRangeSlider/>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-title">
                                            <h4>Popular Products</h4>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/shop/post-1.jpg" alt=""/></Link></figure>
                                                <Link href="/shop-details">Smart Office Camera</Link>
                                                <span className="price">£45.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/shop/post-2.jpg" alt=""/></Link></figure>
                                                <Link href="/shop-details">360 Degree Camera</Link>
                                                <span className="price">£34.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/shop-details"><img src="assets/images/resource/shop/post-3.jpg" alt=""/></Link></figure>
                                                <Link href="/shop-details">Surveillance 3D</Link>
                                                <span className="price">£29.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                <div className="our-shop">
                                    <div className="item-shorting clearfix">
                                        <div className="text pull-left">
                                            <h6>We found 14 products for you</h6>
                                        </div>
                                        <div className="short-box pull-right clearfix">
                                            <p>Sort by:</p>
                                            <div className="select-box">
                                                <select className="wide">
                                                <option data-display="Popularity">Popularity</option>
                                                <option value="1">New Arrival</option>
                                                <option value="2">Best Selling</option>
                                                <option value="3">Top Rated</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-1.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Surveillance 3D</Link></h6>
                                                        <span className="price">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-2.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Bullet DVR Camera</Link></h6>
                                                        <span className="price">£24.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-3.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Street Security</Link></h6>
                                                        <span className="price">£39.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-4.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">360 Degree Camera</Link></h6>
                                                        <span className="price">£39.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-5.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Smart Digital Lock</Link></h6>
                                                        <span className="price">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-6.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Bullet DVR Camera</Link></h6>
                                                        <span className="price">£24.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-7.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">HD Bullet Camera</Link></h6>
                                                        <span className="price">£24.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-8.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Waterproof Bullet HD</Link></h6>
                                                        <span className="price">£39.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                                            <div className="shop-block-one">
                                                <div className="inner-box">
                                                    <figure className="image-box">
                                                        <img src="assets/images/resource/shop/shop-9.jpg" alt=""/>
                                                        <Link href="/shop-details" className="cart-btn"><i className="icon-shopping-cart"></i>Add to Cart</Link>
                                                    </figure>
                                                    <div className="lower-content">
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <h6><Link href="/shop-details">Smart Office Camera</Link></h6>
                                                        <span className="price">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper centred">
                                        <ul className="pagination clearfix">
                                            <li><Link href="/shop"><i className="fas fa-angle-left"></i></Link></li>
                                            <li><Link href="/shop" className="current">01</Link></li>
                                            <li><Link href="/shop">02</Link></li>
                                            <li><Link href="/shop"><i className="fas fa-angle-right"></i></Link></li>
                                        </ul>
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
