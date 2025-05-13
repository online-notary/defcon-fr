'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';
import 'app/favicon.ico';
import Link from 'next/link';

export default function Blog_page_two() {
  return (
    <div className="boxed_wrapper">
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Blog With Sidebar"
      >
        <section className="sidebar-page-container sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-sidebar-content">
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-22.jpg" alt="" />
                        <Link href="/blog-details" className="link">
                          <i className="icon-zoom-in"></i>
                        </Link>
                      </figure>
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
                          <h3>
                            <Link href="/blog-details">
                              Five Best Ways CCTV Can Improve Security of Your
                              House & Business
                            </Link>
                          </h3>
                          <div className="text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted the readable content of a page when
                              looking at its layout.
                            </p>
                          </div>
                          <div className="link">
                            <Link href="/blog-details">
                              Read more<i className="fas fa-angle-right"></i>
                            </Link>
                          </div>
                          <div className="share-option">
                            <i className="fas fa-share-alt share-icon"></i>
                            <span>Share this post</span>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-23.jpg" alt="" />
                        <Link href="/blog-details" className="link">
                          <i className="icon-zoom-in"></i>
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="category">
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Manufacturer
                            </Link>
                          </div>
                          <div className="upper clearfix">
                            <div className="admin-box pull-left">
                              <figure className="admin-thumb">
                                <img
                                  src="assets/images/news/admin-8.jpg"
                                  alt=""
                                />
                              </figure>
                              <h6>Clive Daniel</h6>
                              <span>On 05th September, 2020</span>
                            </div>
                            <div className="comment pull-left">
                              <Link href="/blog-details">
                                <i className="far fa-comment-alt"></i>Comments:
                                3
                              </Link>
                            </div>
                          </div>
                          <h3>
                            <Link href="/blog-details">
                              Reasons Why it is Important to install CCTV
                            </Link>
                          </h3>
                          <div className="text">
                            <p>
                              Prevents our being able to do what we like best,
                              every pleasure is to welcomed and every pain
                              avoided. But in certain circumstances.
                            </p>
                          </div>
                          <div className="link">
                            <Link href="/blog-details">
                              Read more<i className="fas fa-angle-right"></i>
                            </Link>
                          </div>
                          <div className="share-option">
                            <i className="fas fa-share-alt share-icon"></i>
                            <span>Share this post</span>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-24.jpg" alt="" />
                        <Link href="/blog-details" className="link">
                          <i className="icon-zoom-in"></i>
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="category">
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Rapair & Service
                            </Link>
                          </div>
                          <div className="upper clearfix">
                            <div className="admin-box pull-left">
                              <figure className="admin-thumb">
                                <img
                                  src="assets/images/news/admin-9.jpg"
                                  alt=""
                                />
                              </figure>
                              <h6>Bert Anselm</h6>
                              <span>On 22nd August, 2020</span>
                            </div>
                            <div className="comment pull-left">
                              <Link href="/blog-details">
                                <i className="far fa-comment-alt"></i>Comments:
                                0
                              </Link>
                            </div>
                          </div>
                          <h3>
                            <Link href="/blog-details">
                              Best Places To Install CCTV Cameras
                            </Link>
                          </h3>
                          <div className="text">
                            <p>
                              The claims of duty or the obligations of business
                              it will frequently occur that pleasures have to be
                              repudiated and annoyances accepted.
                            </p>
                          </div>
                          <div className="link">
                            <Link href="/blog-details">
                              Read more<i className="fas fa-angle-right"></i>
                            </Link>
                          </div>
                          <div className="share-option">
                            <i className="fas fa-share-alt share-icon"></i>
                            <span>Share this post</span>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-25.jpg" alt="" />
                        <Link href="/blog-details" className="link">
                          <i className="icon-zoom-in"></i>
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <div className="inner">
                          <div className="category">
                            <Link href="/blog-details">
                              <i className="far fa-folder"></i>Manufacturer
                            </Link>
                          </div>
                          <div className="upper clearfix">
                            <div className="admin-box pull-left">
                              <figure className="admin-thumb">
                                <img
                                  src="assets/images/news/admin-10.jpg"
                                  alt=""
                                />
                              </figure>
                              <h6>Clive Daniel</h6>
                              <span>On 08th August, 2020 </span>
                            </div>
                            <div className="comment pull-left">
                              <Link href="/blog-details">
                                <i className="far fa-comment-alt"></i>Comments:
                                3
                              </Link>
                            </div>
                          </div>
                          <h3>
                            <Link href="/blog-details">
                              How much does it Cost to Install CCTV?
                            </Link>
                          </h3>
                          <div className="text">
                            <p>
                              Prevents our being able to do what we like best,
                              every pleasure is to welcomed and every pain
                              avoided. But in certain circumstances.
                            </p>
                          </div>
                          <div className="link">
                            <Link href="/blog-details">
                              Read more<i className="fas fa-angle-right"></i>
                            </Link>
                          </div>
                          <div className="share-option">
                            <i className="fas fa-share-alt share-icon"></i>
                            <span>Share this post</span>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="news-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="assets/images/news/news-26.jpg" alt="" />
                        <Link href="/blog-details" className="link">
                          <i className="icon-zoom-in"></i>
                        </Link>
                      </figure>
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
                                  src="assets/images/news/admin-11.jpg"
                                  alt=""
                                />
                              </figure>
                              <h6>Bert Anselm</h6>
                              <span>On 22nd July, 2020 </span>
                            </div>
                            <div className="comment pull-left">
                              <Link href="/blog-details">
                                <i className="far fa-comment-alt"></i>Comments:
                                8
                              </Link>
                            </div>
                          </div>
                          <h3>
                            <Link href="/blog-details">
                              How can i Watch CCTV Footage on my phone and
                              Computer?
                            </Link>
                          </h3>
                          <div className="text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted the readable content of a page when
                              looking at its layout.
                            </p>
                          </div>
                          <div className="link">
                            <Link href="/blog-details">
                              Read more<i className="fas fa-angle-right"></i>
                            </Link>
                          </div>
                          <div className="share-option">
                            <i className="fas fa-share-alt share-icon"></i>
                            <span>Share this post</span>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/blog-2">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination-wrapper centred">
                    <ul className="pagination clearfix">
                      <li>
                        <Link href="/blog-2">
                          <i className="fas fa-angle-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-2" className="current">
                          01
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-2">02</Link>
                      </li>
                      <li>
                        <Link href="/blog-2">
                          <i className="fas fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar default-sidebar ml-30">
                  <div className="sidebar-widget search-widget">
                    <form
                      action="/blog-2"
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
