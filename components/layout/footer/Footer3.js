'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer3() {
  return (
    <>
      <footer className="main-footer bg-color-3">
        <div className="auto-container">
          <div className="footer-top-three">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contact</h3>
                  </div>
                  <div className="widget-content">
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
                        <Link href="/index-3">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-3">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-3">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-3">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Company</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/index-3">About Us</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Our Services</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Projects</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Industries</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Pricing & Plans</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Bodyguards</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Why Choose Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/index-3">Get Free Quote</Link>
                      </li>
                      <li>
                        <Link href="/index-3">News & Updates</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Private Policies</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Monitoring</Link>
                      </li>
                      <li>
                        <Link href="/index-3">FAQ’s</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Get in Touch</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-column subscribe-widget">
                  <div className="widget-title">
                    <h3>Subscribe us</h3>
                  </div>
                  <div className="text">
                    <p>Subscribe our newsletter & get updates to your inbox.</p>
                  </div>
                  <div className="form-inner">
                    <form
                      action="contact.html"
                      method="post"
                      className="subscribe-form"
                    >
                      <div className="form-group">
                        <i className="far fa-user"></i>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <i className="far fa-envelope"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address ..."
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="theme-btn">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-three clearfix">
            <div className="copyright pull-left">
              <p>
                &copy; {new Date().getFullYear()}{' '}
                <Link href="/index-3">Blackcats</Link>, All Rights Reserved.
              </p>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li>
                <Link href="/index-3">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/index-3">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/index-3">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
