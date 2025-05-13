'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Shop_details() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Product Single">
                <section className="shop-details sec-pad">
                    <div className="auto-container">
                        <div className="product-details-content">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box">
                                        <Link href="assets/images/resource/shop/single-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/shop/single-1.jpg" alt=""/></Link>
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="product-details">
                                        <div className="title-box">
                                            <h3>Bullet DVR Camera</h3>
                                            <div className="customer-review clearfix">
                                                <ul className="rating-box clearfix">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                </ul>
                                                <Link href="/shop-details">[3 Customer Reviews]</Link>
                                            </div>
                                            <h4>£45.00</h4>
                                            <div className="share-box"><Link href="/shop-details"><i className="fas fa-share-alt"></i></Link></div>
                                        </div>
                                        <div className="text">
                                            <p>Our being able to do what we like best, every pleasure is to welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</p>
                                        </div>
                                        <ul className="product-info clearfix">
                                            <li>Clarity:<span>5mp</span></li>
                                            <li>Warranty:<span>2 Years</span></li>
                                            <li>Mobile View:<span>Yes</span></li>
                                            <li>Night Vision:<span>Yes</span></li>
                                        </ul>
                                        <div className="addto-cart-box"> 
                                            <ul className="clearfix">
                                                <li className="item-quantity"><input className="quantity-spinner" type="number" placeholder="1" name="quantity"/></li>
                                                <li className="cart-btn"><button type="button" className="theme-btn style-one">Add To Cart</button></li>
                                                <li className="like-btn"><Link href="/shop-details"><i className="icon-increase"></i></Link></li>
                                            </ul>
                                        </div>
                                        <ul className="categry-box">
                                            <li><h6>Category:</h6></li>
                                            <li>&nbsp;<Link href="/shop-details">Bullet</Link>,&nbsp;</li>
                                            <li><Link href="/shop-details">Cameras</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-discription">
                            <div className="tabs-box">
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons centred clearfix">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Description</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Reviews - 2</li>
                                    </ul>
                                </div>
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                        <div className="text">
                                            <p>Nor again is there anyone who loves or pursues or desires to pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious except to obtain some advantage from it? But who has any right to find fault with a man who chooses.</p>
                                            <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a completed great of the great explorer of the truth, the master-builder of human happiness except to obtain some advantage.</p>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                        <div className="reviews-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                                    <div className="single-review-box">
                                                        <figure className="image-box"><img src="assets/images/resource/shop/review-1.png" alt=""/></figure>
                                                        <h5>Steven Rich, <span>March 10, 2020</span></h5>
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <p>Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                                    <div className="single-review-box">
                                                        <figure className="image-box"><img src="assets/images/resource/shop/review-2.png" alt=""/></figure>
                                                        <h5>William Cobus, <span>March 10, 2020</span></h5>
                                                        <ul className="rating-box clearfix">
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                        <p>Frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <div className="title-box">
                                                <h3>Add Your Comments,</h3>
                                                <p>Your email address will not be published. Required fields are marked *</p>
                                            </div>
                                            <form action="/shop-details" method="post">
                                                <div className="row clearfix">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Comments</label>
                                                            <textarea name="message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Name*</label>
                                                            <input type="text" name="name" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Email*</label>
                                                            <input type="email" name="email" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="rating-box clearfix">
                                                            <p>Your Review</p>
                                                            <ul className="rating clearfix">
                                                                <li><i className="far fa-star"></i></li>
                                                                <li><i className="far fa-star"></i></li>
                                                                <li><i className="far fa-star"></i></li>
                                                                <li><i className="far fa-star"></i></li>
                                                                <li><i className="far fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="message-btn clearfix">
                                                            <button type="submit" className="theme-btn style-one">Submit</button>
                                                            <div className="custom-controls-stacked">
                                                                <label className="custom-control material-checkbox">
                                                                    <input type="checkbox" className="material-control-input"/>
                                                                    <span className="material-control-indicator"></span>
                                                                    <span className="text">Save my name, email, and website in this browser for the next time I comment.</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-products">
                            <div className="title">
                                <h3>Related Products</h3>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
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
                                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
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
                                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
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
                                <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
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
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
