'use client';
import React from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

export default function Header6({ scroll, handleMobileMenu, handleSidebar }) {
  return (
    <>
      {/* main header */}

      <header
        className={`main-header style-six ${scroll ? 'fixed-header' : ''}`}
      >
        <div className="logo-box">
          <figure className="logo">
            <Link href="/index-6">
              <img src="assets/images/logo-7.png" alt="" />
            </Link>
          </figure>
        </div>
        <div className="support-box">
          <i className="icon-smartphone"></i>
          <p>Make a Call</p>
          <h5>
            <Link href="tel:15417543010">(972) 499-4130</Link>
          </h5>
        </div>

        <div className="header-top-3">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <ul className="info clearfix pull-left">
                <li>
                  <i className="icon-placeholder"></i>246 Old York Rd, NY
                </li>
                <li>
                  <i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)
                </li>
              </ul>
              <div className="right-column clearfix pull-right">
                <div className="mail-box">
                  <i className="icon-email-2"></i>
                  <Link href="mailto:admin@DefconOneSecurity.com">
                    admin@DefconOneSecurity.com
                  </Link>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <h6>Connect Us</h6>
                  </li>
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
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="menu-area clearfix pull-left">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <ul className="other-option clearfix pull-right">
                <li className="search-box-outer" onClick={handleSidebar}>
                  <i className="icon-search"></i>
                </li>
                <li className="btn-box">
                  <Link href="/index-6" className="theme-btn">
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`sticky-header ${scroll ? 'animated slideInDown' : ''}`}
        >
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="menu-area pull-left">
                <nav className="main-menu clearfix">
                  <Menu />
                </nav>
              </div>
              <ul className="other-option clearfix pull-right">
                <li className="search-box-outer" onClick={handleSidebar}>
                  <i className="icon-search"></i>
                </li>
                <li className="btn-box">
                  <Link href="/index-6" className="theme-btn">
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
