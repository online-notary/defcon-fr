'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Blog_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid View">
                <section className="news-section blog-grid sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-1.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Installation</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-1.jpg" alt=""/></figure>
                                                    <h6>Bert Anselm</h6>
                                                    <span>On 14th September, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">5 Ways CCTV Can Improve Security of Your House</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>2</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-2.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Manufacturer</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-2.jpg" alt=""/></figure>
                                                    <h6>Clive Daniel</h6>
                                                    <span>On 05th September, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">Reasons Why it is Important to install CCTV</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>3</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-3.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Installation</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-3.jpg" alt=""/></figure>
                                                    <h6>Bert Anselm</h6>
                                                    <span>On 22nd August, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">Best Places To Install CCTV Cameras In Your House</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>0</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-19.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Installation</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-1.jpg" alt=""/></figure>
                                                    <h6>Bert Anselm</h6>
                                                    <span>On 08th August, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">How much does it Cost to Install CCTV?</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>0</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-20.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Manufacturer</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-2.jpg" alt=""/></figure>
                                                    <h6>Clive Daniel</h6>
                                                    <span>On 22nd July, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">How can i Watch CCTV Footage on my Computer?</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>8</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src="assets/images/news/news-21.jpg" alt=""/>
                                            <Link href="/blog-details" className="link"><i className="icon-zoom-in"></i></Link>
                                        </figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Installation</Link></div>
                                                <div className="admin-box">
                                                    <figure className="admin-thumb"><img src="assets/images/news/admin-3.jpg" alt=""/></figure>
                                                    <h6>Bert Anselm</h6>
                                                    <span>On 21st June, 2020</span>
                                                </div>
                                                <h5><Link href="/blog-details">Should Families get 24/7 Access to Care Home CCTV?</Link></h5>
                                                <div className="link"><Link href="/blog-details">Read more<i className="fas fa-angle-right"></i></Link></div>
                                                <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>2</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-wrapper centred">
                            <ul className="pagination clearfix">
                                <li><Link href="/blog"><i className="fas fa-angle-left"></i></Link></li>
                                <li><Link href="/blog" className="current">01</Link></li>
                                <li><Link href="/blog">02</Link></li>
                                <li><Link href="/blog"><i className="fas fa-angle-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
