'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import 'app/favicon.ico';
import Link from 'next/link';

export default function Blog_details() {
  return (
    <div className="boxed_wrapper">
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Blog Single Post"
      >
        <section className="sidebar-page-container blog-details sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <div className="news-block-one">
                    <div className="inner-box">
                      <div className="lower-content">
                        <div className="inner">
                          <div className="category">
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Installation
                            </Link>
                          </div>
                          <div className="upper clearfix">
                            <div className="admin-box pull-left">
                              <figure className="admin-thumb">
                                <img
                                  src="assets/images/news/admin-7.jpg"
                                  alt=""
                                />
                              </figure>
                              <h6>Bert Anselm</h6>
                              <span>On 14th September, 2020</span>
                            </div>
                            <div className="comment pull-left">
                              <Link href="/blog-details">
                                <i className="far fa-comment-alt"></i>Comments:
                                2
                              </Link>
                            </div>
                          </div>
                          <h3>Reasons Why it is Important to install CCTV</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="upper-block">
                    <div className="text">
                      <h3>Home & Office Safety</h3>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain. These cases are perfectly simple and easy
                        to distinguish.
                      </p>
                    </div>
                    <figure className="image-box">
                      <img src="assets/images/news/news-23.jpg" alt="" />
                    </figure>
                    <div className="text">
                      <h3>Reduce Liability Risk</h3>
                      <p>
                        In a free hour when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every
                        pain avoided but in certain circumstances and owing to
                        the claims of duty or the obligations.
                      </p>
                      <blockquote>
                        <div className="icon-box">
                          <i className="icon-left-quote"></i>
                        </div>
                        <h5>
                          Blackcats provides the best quality cameras available
                          in the market. with the best vision systems &
                          durability.
                        </h5>
                        <span>Lamont Shaun</span>
                      </blockquote>
                      <p>
                        Through weakness of will, which is the same as saying
                        through shrinking from toil and pain these cases are
                        perfectly simple and easy to distinguish in a free.
                      </p>
                      <p>
                        Business it will frequently occur that pleasures have to
                        be repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection.
                      </p>
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power.
                      </p>
                    </div>
                    <div className="two-column">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image">
                            <img src="assets/images/news/news-27.jpg" alt="" />
                          </figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image">
                            <img src="assets/images/news/news-28.jpg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <h3>CCTV Can Prevent Crime</h3>
                      <p>
                        Rationally encounter consequences that are extremely
                        painful. Nor again is there anyone who loves or pursues
                        or desires to obtain pain of itself.
                      </p>
                      <ul className="list clearfix">
                        <li>Undertakes laborious physical exercise</li>
                        <li>
                          Advantage from it? But who has any right to find fault
                          with a man
                        </li>
                        <li>Who chooses to enjoy a pleasure consequences</li>
                        <li>
                          Complete account of the system & expound the actual
                          teaching
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-share-option clearfix">
                    <ul className="tags-list clearfix pull-left">
                      <li>
                        <Link href="/blog-details">Cyber Security</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Installation</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Safety</Link>
                      </li>
                    </ul>
                    <div className="share-option">
                      <i className="fas fa-share-alt share-icon"></i>
                      <span>Share this post</span>
                      <ul className="social-links clearfix">
                        <li>
                          <Link href="/blog-details">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-btn">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-btn prev-btn">
                          <figure className="post-image">
                            <img
                              src="assets/images/news/post-btn-1.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <Link href="/blog-details">Prev</Link>
                            <h6>
                              How can i Watch CCTV Footage on my Computer?
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-btn next-btn">
                          <figure className="post-image">
                            <img
                              src="assets/images/news/post-btn-2.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <Link href="/blog-details">Next</Link>
                            <h6>
                              Should Families get 24/7 Access to Care Home CCTV?
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="text">
                      <h3>Comments</h3>
                    </div>
                    <div className="comment">
                      <figure className="thumb-box">
                        <img src="assets/images/news/comment-1.jpg" alt="" />
                      </figure>
                      <div className="comment-inner">
                        <div className="comment-info clearfix">
                          <h4>Isaac Herman</h4>
                          <span className="post-date">
                            June 14, 2020 [11.00am]
                          </span>
                        </div>
                        <p>
                          How all this mistaken idea of denouncing pleasure and
                          praising pain was born and I will give you a complete
                          account of the system.
                        </p>
                        <Link href="/blog-details" className="reply-btn">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="comment reply-comment">
                      <figure className="thumb-box">
                        <img src="assets/images/news/comment-2.jpg" alt="" />
                      </figure>
                      <div className="comment-inner">
                        <div className="comment-info clearfix">
                          <h4>William Cobus</h4>
                          <span className="post-date">
                            June 14, 2020 [11.20am]
                          </span>
                        </div>
                        <p>
                          Undertakes laborious physical exercise, except to
                          obtain some advantage from it but who has any right to
                          find fault.
                        </p>
                        <Link href="/blog-details" className="reply-btn">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="comments-form-area">
                    <div className="text">
                      <h3>Send Your Comment</h3>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>
                    <form
                      method="post"
                      action="/blog-details"
                      className="default-form"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            required=""
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Comment ..."
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            className="theme-btn"
                            type="submit"
                            name="submit-form"
                          >
                            post comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar default-sidebar ml-30">
                  <div className="sidebar-widget search-widget">
                    <form
                      action="/blog-details"
                      method="post"
                      className="search-form"
                    >
                      <div className="form-group">
                        <input
                          type="search"
                          name="search-field"
                          placeholder="Keyword..."
                          required=""
                        />
                        <button type="submit">
                          <i className="icon-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="sidebar-widget category-widget">
                    <div className="widget-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        <li>
                          <Link href="/blog-details">
                            <i className="far fa-folder"></i>Installation
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="far fa-folder"></i>Manufacturer
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="far fa-folder"></i>Repair & Service
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="far fa-folder"></i>Home Security
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-details">
                            <i className="far fa-folder"></i>Commercial
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget post-widget">
                    <div className="widget-title">
                      <h3>Latest Post</h3>
                    </div>
                    <div className="post-inner">
                      <div className="single-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                        <div className="post">
                          <figure className="image-box">
                            <img src="assets/images/news/post-4.jpg" alt="" />
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Commercial
                            </Link>
                          </figure>
                          <div className="post-content">
                            <span className="post-date">14th Sept, 2020</span>
                            <h5>
                              <Link href="/blog-details">
                                Five Ways CCTV Can Improve Security of Your
                                House
                              </Link>
                            </h5>
                          </div>
                        </div>
                        <div className="post">
                          <figure className="image-box">
                            <img src="assets/images/news/post-4.jpg" alt="" />
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Commercial
                            </Link>
                          </figure>
                          <div className="post-content">
                            <span className="post-date">10th Sept, 2020</span>
                            <h5>
                              <Link href="/blog-details">
                                Five Ways CCTV Can Improve Security of Your
                                House
                              </Link>
                            </h5>
                          </div>
                        </div>
                        <div className="post">
                          <figure className="image-box">
                            <img src="assets/images/news/post-4.jpg" alt="" />
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Commercial
                            </Link>
                          </figure>
                          <div className="post-content">
                            <span className="post-date">02th Sept, 2020</span>
                            <h5>
                              <Link href="/blog-details">
                                Five Ways CCTV Can Improve Security of Your
                                House
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget tags-widget">
                    <div className="widget-title">
                      <h3>Tags</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="tags-list clearfix">
                        <li>
                          <Link href="/blog-details">Camera</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Commercial</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Equipment</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Installation</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Monitor</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Record</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Safety</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Storage</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="support-widget">
                    <div
                      className="inner-box"
                      style={{
                        backgroundImage:
                          'url(assets/images/resource/widget-2.jpg)',
                      }}
                    >
                      <div className="text">
                        <h3>For All Your Security Camera Needs</h3>
                        <Link href="/">Buy Now</Link>
                      </div>
                      <div className="phone-box">
                        <i className="icon-smartphone"></i>
                        <h6>Call Us</h6>
                        <h5>
                          <Link href="tel:15417543010">(972) 499-4130</Link>
                        </h5>
                      </div>
                      <figure className="logo">
                        <img src="assets/images/icons/widget-logo.png" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
