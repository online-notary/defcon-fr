'use client'
import React from 'react'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header5({ scroll, handleMobileMenu }) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header style-two style-five ${scroll ? "fixed-header" : ""}`}>

            <div className="header-lower">
                <div className="outer-box">
                    <div className="left-column">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/index-5"><img src="assets/images/logo-6.png" alt=""/></Link></figure>
                        </div>
                    </div>
                    <div className="menu-area clearfix">
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                        </nav>
                    </div>
                    <div className="menu-right-content clearfix">
                        <ul className="social-style-one clearfix">
                            <li><Link href="/index-5"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="/index-5"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="/index-5"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                        <div className="cart-box"><Link href="/shop"><i className="icon-shopping-cart"></i><span>[0]</span></Link></div>
                        <div className="support-box">
                            <i className="icon-dial-pad"></i>
                            <p>Make a Call</p>
                            <h5><Link href="tel:15417543010">+1-541-754-3010</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-box">
                    <div className="left-column">
                        <div className="logo-box">
                            <figure className="logo"><Link href="index-2.html"><img src="assets/images/logo-6.png" alt=""/></Link></figure>
                        </div>
                    </div>
                    <div className="menu-area">
                        <nav className="main-menu clearfix">
                            <Menu />
                        </nav>
                    </div>
                    <div className="menu-right-content clearfix">
                        <ul className="social-style-one clearfix">
                            <li><Link href="/index-5"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="/index-5"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="/index-5"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                        <div className="cart-box"><Link href="/shop"><i className="icon-shopping-cart"></i><span>[0]</span></Link></div>
                        <div className="support-box">
                            <i className="icon-dial-pad"></i>
                            <p>Make a Call</p>
                            <h5><Link href="tel:15417543010">+1-541-754-3010</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>

        </>
    )
}
