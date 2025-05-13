'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer4() {
  return (
    <>
      <footer className="main-footer bg-color-5">
        <div className="auto-container">
          <div className="footer-top-four">
            <div className="upper-inner clearfix">
              <div className="footer-logo pull-left">
                <figure className="logo">
                  <Link href="/index-4">
                    <img src="assets/images/footer-logo-2.png" alt="" />
                  </Link>
                </figure>
              </div>
              <ul className="social-style-two clearfix pull-right">
                <li>
                  <Link href="/index-4">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-4">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-4">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-4">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget">
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
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/index-4">About Company</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Leadership</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Blog Post</Link>
                      </li>
                      <li>
                        <Link href="/index-4">FAQ’s</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Certification</Link>
                      </li>
                      <li>
                        <Link href="/index-4">Testimonials</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget subscribe-widget">
                    <p>Subscribe our newsletter & get updates to your inbox.</p>
                    <form
                      action="contact.html"
                      method="post"
                      className="subscribe-form"
                    >
                      <div className="form-group">
                        <i className="far fa-envelope"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address ..."
                          required=""
                        />
                        <button type="submit" className="theme-btn">
                          Subscribe now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-four">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  &copy; {new Date().getFullYear()}{' '}
                  <Link href="/index-4">Blackcats</Link>, All Rights Reserved.
                </p>
              </div>
              <ul className="footer-nav pull-right clearfix">
                <li>
                  <Link href="/index-4">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/index-4">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/index-4">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
