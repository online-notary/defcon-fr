'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer5() {
  return (
    <>
      <footer className="main-footer bg-color-3">
        <div className="auto-container">
          <div className="footer-top-five">
            <div className="upper-inner">
              <ul className="social-style-two clearfix">
                <li>
                  <Link href="/index-5">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-5">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-5">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-5">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
              <div className="footer-logo">
                <figure className="logo">
                  <Link href="/index-5">
                    <img src="assets/images/footer-logo-3.png" alt="" />
                  </Link>
                </figure>
              </div>
              <a className="scroll-top-2 scroll-to-target" href="#top">
                Back to Top <i className="fal fa-angle-up"></i>
              </a>
            </div>
            <div className="content-box centred">
              <div className="text">
                <h3>Get free assessment today</h3>
                <p>
                  You may contact us 24/7 about any emergency related inquiries.
                  However, <br />
                  we recommend you book online.
                </p>
              </div>
              <ul className="info clearfix">
                <li>
                  <i className="icon-smartphone"></i>
                  <p>Make a Call</p>
                  <h5>
                    <Link href="tel:15417543010">(972) 499-4130</Link>
                  </h5>
                </li>
                <li>
                  <i className="icon-email"></i>
                  <p>Mail Us On</p>
                  <h5>
                    <Link href="mailto:admin@DefconOneSecurity.com">
                      admin@DefconOneSecurity.com
                    </Link>
                  </h5>
                </li>
                <li>
                  <i className="icon-location"></i>
                  <p>Location</p>
                  <h5>246 old york rd, ny</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-five">
          <div className="auto-container">
            <div className="bottom-inner clearfix">
              <div className="copyright pull-left">
                <p>
                  &copy; {new Date().getFullYear()}{' '}
                  <Link href="/index-5">Blackcats</Link>, All Rights Reserved.
                </p>
              </div>
              <ul className="footer-nav pull-right clearfix">
                <li>
                  <Link href="/index-5">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/index-5">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/index-5">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
