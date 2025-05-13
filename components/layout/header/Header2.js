'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

export default function Header2({ scroll, handleMobileMenu, handleSidebar }) {
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
        className={`main-header style-two ${scroll ? 'fixed-header' : ''}`}
      >
        <div className="page-header-mobile-info">
          <div
            className={
              isActive.key == 1
                ? 'page-header-mobile-info-content current'
                : 'page-header-mobile-info-content'
            }
          >
            <div className="header-top-2">
              <div className="outer-container">
                <ul className="info clearfix">
                  <li>
                    <i className="icon-placeholder"></i>246 Old York Rd, NY
                  </li>
                  <li>
                    <i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)
                  </li>
                </ul>
                <div className="text">
                  <h6>
                    <i className="icon-right-arrow"></i>Get a Quote:{' '}
                    <Link href="/index-2">
                      Estimation Without any fee or oblication
                    </Link>
                  </h6>
                </div>
                <div className="right-column">
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
                      <Link href="/index-2">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/index-2">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
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
            <div className="btn-box">
              <Link href="/index-2" className="theme-btn style-one">
                Request Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="header-top-2 auto-hidden">
          <div className="outer-container">
            <ul className="info clearfix">
              <li>
                <i className="icon-placeholder"></i>246 Old York Rd, NY
              </li>
              <li>
                <i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)
              </li>
            </ul>
            <div className="text">
              <h6>
                <i className="icon-right-arrow"></i>Get a Quote:{' '}
                <Link href="/index-2">
                  Estimation Without any fee or oblication
                </Link>
              </h6>
            </div>
            <div className="right-column">
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
                  <Link href="/index-2">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-2">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/index-2">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="outer-box">
            <div className="left-column">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/index-2">
                    <img src="assets/images/logo-3.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="search-box-outer" onClick={handleSidebar}>
                <i className="icon-search"></i>
              </div>
            </div>
            <div className="menu-area clearfix">
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
            <div className="menu-right-content clearfix">
              <div className="cart-box">
                <Link href="/shop">
                  <i className="icon-shopping-cart"></i>
                  <span>[0]</span>
                </Link>
              </div>
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

        <div
          className={`sticky-header ${scroll ? 'animated slideInDown' : ''}`}
        >
          <div className="outer-box">
            <div className="left-column">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/index-2">
                    <img src="assets/images/logo-3.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="search-box-outer" onClick={handleSidebar}>
                <i className="icon-search"></i>
              </div>
            </div>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                <Menu />
              </nav>
            </div>
            <div className="menu-right-content clearfix">
              <div className="cart-box">
                <Link href="/shop">
                  <i className="icon-shopping-cart"></i>
                  <span>[0]</span>
                </Link>
              </div>
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
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
