'use client'
import React from 'react'
import Link from "next/link"

export default function News() {
    return (
        <> 

            <section className="news-style-three sec-pad">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Blog & Updates</p>
                        <h2>Latest from our blog posts</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-13.jpg" alt=""/></figure>
                                        <div className="post-date"><h5>14<span>Sep</span></h5></div>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Protection</Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h5><Link href="/blog-details">How to Find The Best Security Guard Services Near Me</Link></h5>
                                        <div className="bottom-box clearfix">
                                            <div className="link pull-left"><Link href="/blog-details"><i className="icon-right-arrow-1"></i>Read more</Link></div>
                                            <div className="comment-box pull-right"><Link href="/blog-details"><i className="far fa-comment-alt"></i>2</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-14.jpg" alt=""/></figure>
                                        <div className="post-date"><h5>05<span>Sep</span></h5></div>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Protection</Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h5><Link href="/blog-details">The Benefits of Access Control Systems for a Business</Link></h5>
                                        <div className="bottom-box clearfix">
                                            <div className="link pull-left"><Link href="/blog-details"><i className="icon-right-arrow-1"></i>Read more</Link></div>
                                            <div className="comment-box pull-right"><Link href="/blog-details"><i className="far fa-comment-alt"></i>3</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/news/news-15.jpg" alt=""/></figure>
                                        <div className="post-date"><h5>22<span>Aug</span></h5></div>
                                        <div className="category"><Link href="/blog-details"><i className="far fa-folder"></i>Management</Link></div>
                                    </div>
                                    <div className="lower-content">
                                        <h5><Link href="/blog-details">What Makes Us The Best Armed Security Guard Company?</Link></h5>
                                        <div className="bottom-box clearfix">
                                            <div className="link pull-left"><Link href="/blog-details"><i className="icon-right-arrow-1"></i>Read more</Link></div>
                                            <div className="comment-box pull-right"><Link href="/blog-details"><i className="far fa-comment-alt"></i>0</Link></div>
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
