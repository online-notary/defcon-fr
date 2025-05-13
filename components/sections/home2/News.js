'use client'
import React from 'react'
import Link from "next/link"

export default function News() {
    return (
        <> 

            <section className="news-style-two sec-pad bg-color-3">
                <div className="auto-container">
                    <div className="sec-title-two">
                        <p>Blog & Updates</p>
                        <h2>Latest from our blog posts</h2>
                        <Link href="/blog" className="link">View All Post<i className="fas fa-angle-right"></i></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-4.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Blockchain</Link></div>
                                            <div className="link"><Link href="/blog-details"><i className="icon-right-arrow-1"></i></Link></div>
                                            <div className="text">
                                                <h4><Link href="/blog-details">Should you be concerned about cyber attacks?</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <figure className="admin-thumb"><img src="assets/images/news/admin-4.jpg" alt=""/></figure>
                                        <h5>Bert Anselm</h5>
                                        <span className="post-date">On 14th September, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-5.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Password</Link></div>
                                            <div className="link"><Link href="/blog-details"><i className="icon-right-arrow-1"></i></Link></div>
                                            <div className="text">
                                                <h4><Link href="/blog-details">IoT Security: Top ten ways to secure your organization</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <figure className="admin-thumb"><img src="assets/images/news/admin-5.jpg" alt=""/></figure>
                                        <h5>Clive Daniel</h5>
                                        <span className="post-date">On 05th September, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-6.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Social Media</Link></div>
                                            <div className="link"><Link href="/blog-details"><i className="icon-right-arrow-1"></i></Link></div>
                                            <div className="text">
                                                <h4><Link href="/blog-details">How to Win Sales by Passing Vendor Risk Assessments?</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <figure className="admin-thumb"><img src="assets/images/news/admin-6.jpg" alt=""/></figure>
                                        <h5>Bert Anselm</h5>
                                        <span className="post-date">On 22nd August, 2020</span>
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
