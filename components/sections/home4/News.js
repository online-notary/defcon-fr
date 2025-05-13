'use client'
import React from 'react'
import Link from "next/link"

export default function News() {
    return (
        <> 

            <section className="news-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Blog & Updates</p>
                        <h2>Latest from our blog posts</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <img src="assets/images/news/news-10.jpg" alt=""/>
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
                                        <img src="assets/images/news/news-11.jpg" alt=""/>
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
                                        <img src="assets/images/news/news-12.jpg" alt=""/>
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
                    </div>
                </div>
            </section>

        </>
    )
}
