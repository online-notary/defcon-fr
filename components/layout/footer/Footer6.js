'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer6() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-top-six">
          <div
            className="pattern-layer"
            style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/index-6">
                      <img src="assets/images/footer-logo-4.png" alt="" />
                    </Link>
                  </figure>
                  <div className="widget-content">
                    <h4>
                      <Link href="tel:8001234567">(972) 449-4130</Link>
                    </h4>
                    <span>Call for free consultation!</span>
                    <p>
                      Right to find fault with a man who chooses too enjoy a
                      pleasures that annoying consequences.
                    </p>
                    <div className="link">
                      <Link href="/index-6">
                        Read more<i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget post-widget">
                  <div className="widget-title">
                    <h3>Latest Post</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="image-box">
                        <img src="assets/images/news/post-1.jpg" alt="" />
                        <Link href="blog-details.html">+</Link>
                      </figure>
                      <h6>
                        <Link href="blog-details.html">
                          5 Ways CCTV Can Improve Security of Your House
                        </Link>
                      </h6>
                      <span className="post-date">14th Sept, 2020</span>
                    </div>
                    <div className="post">
                      <figure className="image-box">
                        <img src="assets/images/news/post-2.jpg" alt="" />
                        <Link href="blog-details.html">+</Link>
                      </figure>
                      <h6>
                        <Link href="blog-details.html">
                          Reasons Why it is Important to install CCTV
                        </Link>
                      </h6>
                      <span className="post-date">05th Sept, 2020</span>
                    </div>
                    <div className="post">
                      <figure className="image-box">
                        <img src="assets/images/news/post-3.jpg" alt="" />
                        <Link href="blog-details.html">+</Link>
                      </figure>
                      <h6>
                        <Link href="blog-details.html">
                          Reasons Why it is Important to install CCTV
                        </Link>
                      </h6>
                      <span className="post-date">01th Sept, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul className="info clearfix">
                    <li>
                      <h6>Location</h6>
                      <p>246 Old York Rd, NY 08505</p>
                    </li>
                    <li>
                      <h6>Mail us</h6>
                      <p>
                        <Link href="mailto:admin@DefconOneSecurity.com">
                          admin@DefconOneSecurity.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <h6>Opening hrs</h6>
                      <p>9.00 - 7.00(Mon_Sat)</p>
                    </li>
                  </ul>
                  <ul className="social-style-two clearfix">
                    <li>
                      <Link href="/index-6">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-6">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-6">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-6">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-six">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  &copy; {new Date().getFullYear()}{' '}
                  <Link href="/index-6">Blackcats</Link>, All Rights Reserved.
                </p>
              </div>
              <ul className="footer-nav pull-right clearfix">
                <li>
                  <Link href="/index-6">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/index-6">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/index-6">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
