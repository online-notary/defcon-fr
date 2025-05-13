'use client'
import React from 'react'
import Link from "next/link"

export default function News() {

    return (
        <> 

            <section className="news-style-four sec-pad bg-color-6">
                <div className="auto-container">
                    <div className="sec-title-three">
                        <div className="icon-box"><i className="icon-efficiency"></i></div>
                        <h2>Latest from our blog posts</h2>
                        <Link href="/blog" className="link">View All Post<i className="fas fa-angle-right"></i></Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-four wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-16.jpg" alt=""/></figure>
                                        <div className="link"><Link href="/blog-details"><i className="fas fa-angle-right"></i></Link></div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/news/author-1.png" alt=""/></figure>
                                            <h5>Bert Anselm</h5>
                                            <span className="post-date">On 14th September, 2020</span>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/blog-details">How to reduce your monthly electricity bill?</Link></h4>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Blockchain</Link></div>
                                        <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>Comments: 2</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-four wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-17.jpg" alt=""/></figure>
                                        <div className="link"><Link href="/blog-details"><i className="fas fa-angle-right"></i></Link></div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/news/author-2.png" alt=""/></figure>
                                            <h5>Clive Daniel</h5>
                                            <span className="post-date">On 05th September, 2020</span>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/blog-details">Solar windows could be on the cards for the future</Link></h4>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Password</Link></div>
                                        <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>Comments: 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-four wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-18.jpg" alt=""/></figure>
                                        <div className="link"><Link href="/blog-details"><i className="fas fa-angle-right"></i></Link></div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/news/author-3.png" alt=""/></figure>
                                            <h5>Bert Anselm</h5>
                                            <span className="post-date">On 2nd August, 2020</span>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><Link href="/blog-details">Energy prices have changed: see our latest price</Link></h4>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Social Media</Link></div>
                                        <div className="comment-box"><Link href="/blog-details"><i className="far fa-comment-alt"></i>Comments: 0</Link></div>
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
