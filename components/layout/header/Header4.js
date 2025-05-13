'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

export default function Header4({ scroll, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      {/* main header */}

      <header
        className={`main-header style-four ${scroll ? 'fixed-header' : ''}`}
      >
        <div className="page-header-mobile-info">
          <div
            className={
              isActive.key == 1
                ? 'page-header-mobile-info-content current'
                : 'page-header-mobile-info-content'
            }
          >
            <div className="header-top">
              <div className="auto-container">
                <div className="top-inner clearfix">
                  <div className="text pull-left">
                    <h6>
                      <i className="icon-right-arrow"></i>Get a Quote:{' '}
                      <Link href="/index-4">
                        Estimation Without any fee or oblication
                      </Link>
                    </h6>
                  </div>
                  <div className="info clearfix pull-right">
                    <ul className="social-links clearfix">
                      <li>
                        <h6>Connect Us</h6>
                      </li>
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
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="search-box-outer" onClick={handleSidebar}>
                      <i className="icon-search"></i>
                      <span>Search</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-upper-2">
              <div className="upper-inner clearfix">
                <div className="logo-box pull-left">
                  <figure className="logo">
                    <Link href="/index-4">
                      <img src="assets/images/logo-5.png" alt="" />
                    </Link>
                  </figure>
                </div>
                <ul className="info-list clearfix pull-right">
                  <li>
                    <div className="icon-box">
                      <i className="icon-email-2"></i>
                    </div>
                    <p>Mail Us On</p>
                    <h5>
                      <Link href="mailto:admin@DefconOneSecurity.com">
                        admin@DefconOneSecurity.com
                      </Link>
                    </h5>
                  </li>
                  <li>
                    <div className="icon-box">
                      <i className="icon-placeholder"></i>
                    </div>
                    <p>Location</p>
                    <h5>246 old york rd, NY</h5>
                  </li>
                </ul>
                <div className="support-box">
                  <i className="icon-dial-pad"></i>
                  <p>Make a Call</p>
                  <h5>
                    <Link href="tel:15417543010">(972) 499-4130</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-box clearfix">
            <div
              className={
                isActive.key == 1
                  ? 'page-header-mobile-info-toggle active'
                  : 'page-header-mobile-info-toggle'
              }
              onClick={() => handleToggle(1)}
            ></div>
            <figure className="logo pull-right">
              <Link href="/index-4">
                <img src="assets/images/logo-5.png" alt="" />
              </Link>
            </figure>
          </div>
        </div>

        <div className="header-top auto-hidden">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <div className="text pull-left">
                <h6>
                  <i className="icon-right-arrow"></i>Get a Quote:{' '}
                  <Link href="/index-4">
                    Estimation Without any fee or oblication
                  </Link>
                </h6>
              </div>
              <div className="info clearfix pull-right">
                <ul className="social-links clearfix">
                  <li>
                    <h6>Connect Us</h6>
                  </li>
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
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
                <div className="search-box-outer" onClick={handleSidebar}>
                  <i className="icon-search"></i>
                  <span>Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="main-header-box">
            <div className="main-box">
              <div className="header-upper-2 auto-hidden">
                <div className="upper-inner clearfix">
                  <div className="logo-box pull-left">
                    <figure className="logo">
                      <Link href="/index-4">
                        <img src="assets/images/logo-5.png" alt="" />
                      </Link>
                    </figure>
                  </div>
                  <ul className="info-list clearfix pull-right">
                    <li>
                      <div className="icon-box">
                        <i className="icon-email-2"></i>
                      </div>
                      <p>Mail Us On</p>
                      <h5>
                        <Link href="mailto:admin@DefconOneSecurity.com">
                          admin@DefconOneSecurity.com
                        </Link>
                      </h5>
                    </li>
                    <li>
                      <div className="icon-box">
                        <i className="icon-placeholder"></i>
                      </div>
                      <p>Location</p>
                      <h5>246 old york rd, NY</h5>
                    </li>
                  </ul>
                  <div className="support-box">
                    <i className="icon-dial-pad"></i>
                    <p>Make a Call</p>
                    <h5>
                      <Link href="tel:15417543010">(972) 499-4130</Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="header-lower">
                <div className="outer-box clearfix">
                  <div className="menu-area clearfix pull-left">
                    <div
                      className="mobile-nav-toggler"
                      onClick={handleMobileMenu}
                    >
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
                  <div className="btn-box">
                    <Link href="/index-4">
                      Request Demo<i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
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
              <div className="btn-box pull-right">
                <Link href="/index-4">
                  Request Demo<i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
